module.exports={
    // 'My first case'(browser){
    //     browser
    //         .url('https://www.google.com')
    //         .waitForElementVisible('body')
    //         .setValue('input[type=text]', 'nightwatch')
    //         .waitForElementVisible('input[name=btnK]')
    //         .click('input[name=btnK]')
    //         .pause(1000)
    //         // .waitForElementVisible('.ads-visurl')
    //         // .assert.containsText('.ads-visurl', 'Night Watch')
    //         .end();
    // }
    'step one: navigate to google': function (browser) {
        browser
            .url('https://www.google.com')
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible('input[name=btnK]', 1000)
            .saveScreenshot('tests_output/google.png')
    },
    'step two: click input': function (browser) {
        browser
            .click('input[name=btnK]')
            .pause(1000)
            .assert.containsText('#main', 'Night Watch')
            .end();
    }
};