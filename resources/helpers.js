const cheerio = require('cheerio')
const _ = require('lodash')
const util = require('util')
const f = require('fs')
const fs = require('fs').promises
const camelcase = require('camelcase')
const moment = require('moment')
const { Key, until, By } = require('selenium-webdriver');
const { expect } = require('chai');
//const writeFile = util.promisify(fs.writeFile)

let credentials = {
    url: 'https://staging.gethired.com',
    email: 'Testautomation1@gethired.com',
    password: 'GetHired@123'
};

let connections = {};

if (f.existsSync('administration.config')){
    connections = JSON.parse(f.readFileSync('connections.json', 'utf-8'))
    
    process.env.ENV_DEV === 'development' ? credentials = {url: connections.url_dev, email: connections.email_dev, password: connections.password_dev} : null

    process.env.ENV_DEV === 'stage' ? credentials = {url: connections.url_stage, email: connections.email_stage, password: connections.password_stage} : null

    process.env.ENV_DEV === 'release' ? credentials = {url: connections.url_release, email: connections.email_release, password: connections.password_release} : null
}   
 
const wait = async function(driver, func, delay = 500, maxAttempts = 20) {
    if (typeof func !== 'function')
        throw new Error('Func must be a function')
    let attempts = 0
    while (attempts < maxAttempts) {
        if (await func())
            return true
        await driver.sleep(delay)
        attempts++
    }
    return false
}

module.exports = {
    makeid(length, type = 'all') {
        var result = ''
        var characters = ''
        switch (type) {
        case 'all':
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            break
        case 'characters':
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
            break
        case 'numbers':
            characters = '0123456789'
            break
        }
        var charactersLength = characters.length
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
    },
    randomFromArray(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    },
    isArrayEqual(x, y) {
        return _(x).differenceWith(y, _.isEqual).isEmpty()
    },
    camelcase: camelcase,
    getRootUrl() {
        return credentials.url
    },
    getPath(relativeUrl) {
        if (!relativeUrl.startsWith('/'))
            relativeUrl = '/' + relativeUrl
        return this.getRootUrl() + relativeUrl
    },
    getCredentials() {
        return {
            email: credentials.email,
            password: credentials.password
        }
    },
    async backSpace(elem, num = 0) {
        let backSpaceCount = 0;
        await recursive();
        async function recursive() {
            backSpaceCount++;
            if (backSpaceCount !== num) {
                await elem.sendKeys(Key.BACK_SPACE);
                return recursive();
            }
            return elem.sendKeys(Key.BACK_SPACE);
        }
            
    },
    async checkError(driver, path = {}, errorMessage) {
        let elem = await driver.findElement(path);
        const errorText = await elem.getText();
        expect(errorText).to.equal(errorMessage);
    },
    async writeTo(driver, path = {}, value = '') {
        let elem = await driver.findElement(path);
        await elem.clear();
        await elem.sendKeys(value);
        return value;
    },
    async checkTextOf(driver, path = {}, checkable) {
        let elem = await driver.findElement(path);
        const text = await elem.getText();
        expect(text).to.be.equal(checkable);
    },
    async clickOn(driver, css) {
        let elem = await driver.findElement(css);
        await elem.click();
    },
    async elementIsVisible(driver, path = {}, timeout = 30000) {
        await driver.wait(until.elementIsVisible(driver.findElement(path)), timeout);
    },
    async element(driver, css = {}) {
        await driver.findElement(css);
    },
    async elements(driver, css = {}) {
        await driver.findElements(css);
    },
    timeAndAttendanceLeftLink(tab = '', mode = 'selector') {
        return {
            selector: `#v-pills-timeattendance-${tab}-tab`,
            mode: mode
        }
    },
    clickOnLabelEdit(section = '', label = '', mode = 'custom') {
        return {
            method: `$('form[data-profile-section=\"${section}\"] label:contains(\"${label}\")').next().next().find('a').first()`,
            mode: mode
        }
    },
    labelInputEditing(section = '', label = '', mode = 'custom') {
        return {
            method: `$('form[data-profile-section=\"${section}\"] label:contains(\"${label}\")').next().children().first()`,
            mode: mode  
        }
    },
    labelInputEffectiveDate(section = '', label = '', name = '', mode = 'custom') {
        return {
            method: `$('form[data-profile-section=\"${section}\"] label:contains(\"${label}\")').closest('.bg-light[style]').find('input[name=\"${name}\"]')`,
            mode: mode  
        }
    },
    selectLabelOption (section = '', label = '', option = '', mode = 'custom') {
        return {
            method: `$('form[data-profile-section=\"${section}\"] label:contains(\"${label}\")').next().find('option[value=\"${option}\"]')`,
            mode: mode
        }
    },
    checkLabelText(section = '', label = '', mode = 'custom') {
        return {
            method: `$('form[data-profile-section=\"${section}\"] label:contains(\"${label}\")').next().find('.gh-multivalue-item').last()`,
            mode: mode
        }
    },
    submitLabelEdit(section = '', label = '', mode = 'custom') {
        return {
            method: `$('form[data-profile-section="${section}"] label:contains(\"${label}\")').closest('.bg-light[style]').find('button.btn-primary:contains(\"Save\")')`,
            mode: mode
        }
    },
    async backSpace(elem, num) {
        let backSpaceCount = 0;
        await recursive();
        async function recursive() {
            backSpaceCount++;
            if (backSpaceCount !== num) {
                await elem.sendKeys(Key.BACK_SPACE);
                return recursive();
            }
                return elem.sendKeys(Key.BACK_SPACE);
            }
            
    },
    formatDate(jsDateObj) {
        var day = +jsDateObj.getDate()
        if(day < 10) day = '0' + day
        var month = +jsDateObj.getMonth() + 1
        if(month < 10) month = '0' + month
        return [month, day, jsDateObj.getFullYear()].join('/')
    },
    wait: wait,
    modals:{
        async ensureModalOpened(driver, modal_count = 0) {

            await wait(driver, async () => {
                let modals = await driver.findElements({ className: 'modal fade show' })
                if(modals.length == modal_count + 1){
                    for (let el of modals) {
                        if (await el.isDisplayed()) {
                            return true
                        } else {
                            return false
                        }
                    }
                }
            })

            let modal = await driver.findElements({ className: 'modal fade show' })
            if (modal.length == 0) {
                return false
            }

            modal = modal[modal_count]

            let done = false
            let count = 0
            let lastPosition

            while (!done) {
                await driver.executeScript(`window.modalPosition = $(".modal.fade.show").eq(${modal_count}).find(".modal-content").offset()`)
                let position = await driver.executeScript('return window.modalPosition')
                if (lastPosition !== position.top) {
                    lastPosition = position.top
                } else {
                    count++
                }
                if (count >= 5) {
                    done = true
                }
                await driver.sleep(50)
            }

            return true
        },
        async ensureModalClosed(driver) {

            const checks = await wait(driver, async () => {
                const els = await driver.findElements({ className: 'modal-backdrop fade modal-stack' })
                if (els.length > 0) {
                    return false
                } else {
                    return true
                }
            })

            if (checks) {
                return true
            } else {
                return false
            }
        },
        async safelyOpenModal(driver, selector) {

            let check_1, check_2 = false

            check_1 = await wait(driver, async () => {
                const els = await driver.findElements(selector)
                for (let el of els) {
                    if (await el.isDisplayed()) {
                        await el.click()
                        return true
                    }
                }
                return false
            })

            if (check_1) {
                check_2 = await this.ensureModalOpened(driver)
            }

            if (check_1 || check_2) {
                return true
            } else {
                return false
            }

        },
        async safelyCloseModal(driver, selector = { css: 'button.close[data-dismiss="modal"]' }) {
            const checks = await wait(driver, async () => {
                const els = await driver.findElements(selector)
                const els_2 = await driver.findElements({ className: 'modal-backdrop fade modal-stack' })
                if (els_2.length > 0) {
                    for (let el of els) {
                        if (await el.isDisplayed()) {
                            await el.click()
                            return false
                        }
                    }
                } else {
                    return true
                }
            })

            if (checks) {
                return true
            } else {
                return false
            }
        },
    },
    tables: {
        async scanTable(driver, table, html, level) {
            let $
            if(!html){
                const table_html = await driver.findElement(table).getAttribute('outerHTML')
                $ = cheerio.load(table_html)
            } else {
                $ = cheerio.load(html)
            }
            const list = []

            $(`tr${level ? '[level="' + level + '"]' : ''}`).each((index, element) => {
                let group = {}
                $(element).find('td').each((ind, el) => {
                    if ($(el).find('button').length == 0) {
                        group[ind] = $(el).text().trim()
                    }
                })
                list.push(group)
            })

            return list
        },
        async getAncestors(driver, params) {
            const defaults = {
                array: true,
                element: 'td'
            }

            const config = Object.assign({}, defaults, params)
            let $
            if(!config.html){
                const table_html = await driver.findElement(config.table).getAttribute('outerHTML')
                $ = cheerio.load(table_html)
            } else {
                $ = cheerio.load(config.html)
            }
            let result = config.array ? [] : ''

            function traverse(root, level, str) {
                if (level > 0) {
                    let found = false
                    while (!found) {
                        root = $(root).prev()
                        if (parseInt($(root).attr('level')) == level - 1) {
                            let new_txt = $(root).find('td').first().text().trim()
                            if (config.array) {
                                result.unshift(new_txt)
                            } else {
                                str = `${new_txt} > ${str}`
                            }
                            level = level - 1
                            found = true
                            traverse(root, level, str)
                        }
                    }
                } else {
                    if (!config.array) {
                        result = str
                    }
                }
            }

            let el = $(`${config.element}:contains("${config.name}")`).first()
            if (config.element !== 'td') {
                el = $(el).closest('td')
            }
            const root = $(el).parent()
            const level = parseInt($(root).attr('level'))
            const txt = $(el).text().trim()
            if (level == 0) {
                if (config.array) {
                    result.push(txt)
                } else {
                    result = txt
                }
            } else {
                if (config.array) {
                    result.push(txt)
                }
                traverse(root, level, txt)
            }

            return result
        },
        async getActionID(driver, params) {
            const defaults = {
                element: 'td',
                type: 'data-id',
                btn_type: 'button'
            }

            const config = Object.assign({}, defaults, params)

            const table_html = await driver.findElement(config.table).getAttribute('outerHTML')
            const $ = cheerio.load(table_html)

            let data_id = null

            $(`${config.element}:contains("${config.name}")`).each((index, element) => {
                if ($(element).text().trim() !== config.name) {
                    return
                }
                data_id = $(element).parent().find(config.btn_type).first().attr(config.type)
            })
            return data_id
        }
    },
    async findMatchInList(driver, selector, text, optionSelector = 'option', waitFnc = this.wait) {

        let result = []
        const checks = await waitFnc(driver, async () => {
            const els = await driver.findElements({ css: `${selector} > ${optionSelector}` })

            for (let el of els) {
                if (await el.isDisplayed()) {
                    if (await el.getText() == text) {
                        result = el
                        return true
                    }
                }
            }
        })

        if (checks) {
            return result
        } else {
            return []
        }
    },
    async getElementHack(driver, params){
        const defaults = {
            mode: 'text'
        }

        const config = Object.assign({}, defaults, params)

        let command

        switch (config.mode){
        case 'text':
            command = `$('${config.selector}:contains(${config.text})').first()`
            break
        case 'selector':
            command = `$('${config.selector}').first()`
            break
        default:
        case 'custom':
            command = config.method
            if(command.indexOf('.first()') == -1){
                command = command + '.first()'
            }
            break
        }

        await driver.executeScript(`
            window.getPathTo = function(element) {
                console.log(element)
                if (element.tagName == 'HTML')
                    return '/HTML[1]';
                if (element===document.body)
                    return '/HTML[1]/BODY[1]';

                var ix= 0;
                var siblings= element.parentNode.childNodes;
                for (var i= 0; i<siblings.length; i++) {
                    console.log(i)
                    var sibling= siblings[i];
                    if (sibling===element)
                        return getPathTo(element.parentNode)+'/'+element.tagName+'['+(ix+1)+']';
                    if (sibling.nodeType===1 && sibling.tagName===element.tagName)
                        ix++;
                }
            }
        `)

        await driver.executeScript(`window.hackyThing = window.getPathTo(${command}[0])`)

        let xpath = await driver.executeScript('return window.hackyThing')

        let result = await driver.findElement({xpath:xpath})

        return result
    },
    async getElementsHack(driver, params){
        const defaults = {
            mode: 'text'
        }

        const config = Object.assign({}, defaults, params)

        let command

        switch (config.mode){
        case 'text':
            command = `$('${config.selector}:contains(${config.text})')`
            break
        case 'selector':
            command = `$('${config.selector}')`
            break
        default:
        case 'custom':
            command = config.method
            break
        }

        await driver.executeScript(`
            window.getPathTo = function(element) {
                if (element.tagName == 'HTML')
                    return '/HTML[1]';
                if (element===document.body)
                    return '/HTML[1]/BODY[1]';

                var ix= 0;
                var siblings= element.parentNode.childNodes;
                for (var i= 0; i<siblings.length; i++) {
                    var sibling= siblings[i];
                    if (sibling===element)
                        return getPathTo(element.parentNode)+'/'+element.tagName+'['+(ix+1)+']';
                    if (sibling.nodeType===1 && sibling.tagName===element.tagName)
                        ix++;
                }
            }
        `)

        await driver.executeScript(`
            window.hackyThing = []
            ${command}.each(function(){
                window.hackyThing.push(window.getPathTo(this))
            })
        `)

        let xpaths = await driver.executeScript('return window.hackyThing')
        let result = []

        for(let xpath of xpaths){
            result.push(await driver.findElement({xpath:xpath}))
        }

        return result
    },

    /**
     * Checks if and element exists in the DOM
     * @param driver WebDriver instance
     * @param locator An element locator accepted by WebDriver.findElement()
     * @returns {Promise<boolean>}
     */
    async elementExists(driver, locator) {
        let exists = true
        try {
            await driver.findElement(locator)
        } catch (e) {
            exists = false
        }

        return exists
    },
    async serialize(driver, selector){

        let data = {}

        let form = await driver.findElement(selector)

        let inputs = await form.findElements({tagName: 'input'})
        let textareas = await form.findElements({tagName: 'textarea'})
        let selects = await form.findElements({tagName: 'select'})

        for(let [index, input] of inputs.entries()){
            if(await input.isDisplayed()){
                if(await input.getAttribute('type') !== 'checkbox'){
                    let key = `input_${index}`
                    let value = await input.getAttribute('value')
                    data[key] = value
                } else {
                    let key = `checkbox_${index}`
                    let value = await input.isSelected()
                    data[key] = value
                }
            } else if(await input.getAttribute('type') == 'checkbox' && await input.getAttribute('class') == 'onoffswitch-checkbox'){
                let key = `checkbox_${index}`
                let value = await input.isSelected()
                data[key] = value
            }
        }

        for(let [index, textarea] of textareas.entries()){
            if(await textarea.isDisplayed()){
                let key = `textarea_${index}`
                let value = await textarea.getAttribute('innerHTML')
                data[key] = value
            }
        }

        for(let [index, select] of selects.entries()){
            if(await select.isDisplayed()){
                let key = `select_${index}`
                let value = await select.getAttribute('value')
                let options = await select.findElements({tagName:'option'})
                for(let option of options){
                    let opt_val = await option.getAttribute('value')
                    if (await opt_val == value){
                        value = await option.getText()
                        break
                    }
                }
                data[key] = value
            }
        }
        return [data]
    },
    async serialize2(driver, selector){
        let data = {}
        let form = await driver.findElement(selector)
        let inputs = await form.findElements({css: 'input, textarea, select'})

        for(let [index, element] of inputs.entries()) {
            if(await element.isDisplayed()){
                switch (await element.getTagName()) {
                case 'input':
                    switch (await element.getAttribute('type')){
                    case 'button':
                        break
                    case 'checkbox':
                        var key = `${index}_checkbox`
                        var value = await element.isSelected()
                        data[key] = value
                        break
                    case 'color':
                        break
                    case 'date':
                        break
                    case 'datetime-local':
                        break
                    case 'email':
                        break
                    case 'file':
                        break
                    case 'hidden':
                        break
                    case 'image':
                        break
                    case 'month':
                        break
                    case 'number':
                        break
                    case 'password':
                        break
                    case 'radio':
                        break
                    case 'range':
                        break
                    case 'reset':
                        break
                    case 'search':
                        break
                    case 'submit': 
                        break           
                    case 'tel': 
                        break
                    case 'text':
                        var key = `${index}_input`
                        var value = await element.getAttribute('value')
                        data[key] = value
                        break
                    case 'time': 
                        break 
                    case 'url': 
                        break
                    case 'week':
                        break
                    default:
                        throw new Error('Unknown input type')
                    }
                    break
                case 'textarea':
                    var key = `${index}_textarea`
                    var value = await element.getAttribute('value')
                    data[key] = value
                    break
                case 'select':
                    var key = `${index}_select`
                    var value = await element.getAttribute('value')
                    var options = await element.findElements({tagName:'option'})
                    for(var option of options) {
                        var opt_val = await option.getAttribute('value')
                        if (await opt_val == value) {
                            value = await option.getText()
                            break
                        }
                    }
                    data[key] = value
                    break
                default:
                }
            } else if(await input.getAttribute('type') == 'checkbox' && await input.getAttribute('class') == 'onoffswitch-checkbox'){
                // TODO: specify other handlers here
                let key = `${index}_checkbox`
                let value = await input.isSelected()
                data[key] = value
            }
        }
        return [data]
    },
    async takeScreenshot(driver, file){
        return await driver.takeScreenshot()
            .then(image => fs.writeFile(file, image, 'base64'))
    },
    decisionMaker(rules, tests) {
        let obj = {}

        if(rules == undefined || rules.length == 0){
            return true
        }

        for(let rule of rules){
            obj[rule] = tests[rule]
        }
        let decision = Object.values(obj).some(el => el == false)
        return !decision
    },
    getRandomInt(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    },
    getNextWeekday(dayINeed){
        let today = moment(new Date()).format('MM/DD/YYYY')
        let weekday = moment(today, 'MM/DD/YYYY').isoWeekday()

        while(weekday !== dayINeed){
            today = moment(today, 'MM/DD/YYYY').add(1, 'day').format('MM/DD/YYYY')
            weekday = moment(today, 'MM/DD/YYYY').isoWeekday()
        }

        return today
    }
}