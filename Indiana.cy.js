describe('Форма логина', function () {

    it('Верный логин, верный пароль', function () {
           cy.visit('https://login.qa.studio/');
           cy.get('#mail').type('german@dolnikov.ru');
           cy.get('#pass').type('iLoveqastudio1');
           cy.get('#loginButton').should('be.enabled');
           cy.get('#loginButton').click();
           cy.contains('Авторизация прошла успешно');
           cy.get('#exitMessageButton > .exitIcon');
   
        })

        it('Логики восстановления пароля', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').click();
            cy.get('#forgotForm').type('iLoveqastudio2@yandex.ru');
            cy.get('#restoreEmailButton').click();
            cy.contains('Успешно отправили пароль на e-mail');
            cy.get('#exitMessageButton > .exitIcon');

        })
            it('Верный логин, неверный пароль', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('german@dolnikov.ru');
                cy.get('#loginButton').should('be.disabled');
                cy.get('#pass').type('iloveqastudio2');
                cy.get('#loginButton').should('be.enabled');
                cy.get('#loginButton').click();
                cy.contains('Такого логина или пароля нет');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        })

            it('Нверный логин, верный пароль', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('german3@dolnikov.ru');
                cy.get('#loginButton').should('be.disabled');
                cy.get('#pass').type('iloveqastudio1');
                cy.get('#loginButton').should('be.enabled');
                cy.get('#loginButton').click();
                cy.contains('Такого логина или пароля нет');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            })
                
            it('Проверка валидации', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('german3dolnikov.ru');
                cy.get('#loginButton').should('be.disabled');
                cy.get('#pass').type('iloveqastudio1');
                cy.get('#loginButton').should('be.enabled');
                cy.get('#loginButton').click();
                cy.contains('Нужно исправить проблему валидации');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            })
                
            it('Приведение к строчным буквам в логине', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('GerMan@Dolnikov.ru');
                cy.get('#loginButton').should('be.disabled');
                cy.get('#pass').type('iloveqastudio1');
                cy.get('#loginButton').should('be.enabled');
                cy.get('#loginButton').click();
                cy.contains('Такого логина или пароля нет');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
    })
