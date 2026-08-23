import { expect, test } from "@playwright/test"
import dotenv from 'dotenv';
dotenv.config();

test.beforeEach(async({page})=>{
    await page.goto('/')
})

test.describe('Tela de Login', async () => {
    test('Usuário realizando Login', async ({ page }) => {
        await expect.soft(page.getByText('Swag Labs')).toBeVisible();
        await page.getByTestId('username').fill(process.env.LOGIN_USERNAME!);
        await page.getByTestId('password').fill(process.env.LOGIN_PASSWORD!);
        await page.getByTestId('login-button').click();
    })
    test('Login com Sucesso', async ({ page }) => {
        await page.getByTestId('username').fill(process.env.LOGIN_USERNAME!);
        await page.getByTestId('password').fill(process.env.LOGIN_PASSWORD!);
        await page.getByTestId('login-button').click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        await expect(page.getByTestId('inventory-item-name').filter({ hasText: /^Sauce Labs Backpack$/ })).toBeVisible();
        // const itemLink = page.getByTestId('item-4-title-link');
        // await expect(itemLink).toBeVisible();
    })
    test('Login com Usuario Locked', async ({ page }) => {
        await page.getByTestId('username').fill(process.env.TRAVADO!);
        await page.getByTestId('password').fill(process.env.LOGIN_PASSWORD!);
        await page.getByTestId('login-button').click();
        const textoErro = page.getByTestId('error');
        await expect(textoErro).toHaveText('Epic sadface: Sorry, this user has been locked out.')
    })

    test('Login Senha errada ', async ({ page }) => {
        await page.getByTestId('username').fill(process.env.LOGIN_USERNAME!);
        await page.getByTestId('password').fill('123456');
        await page.getByTestId('login-button').click();
        const textoErro = page.getByTestId('error');
        await expect(textoErro).toHaveText('Epic sadface: Username and password do not match any user in this service');
    })
})
test.describe('Tela de produto e Carrinho', async () => {
    test('Adicionando o produto ao carrinho e finalizando a compra', async ({ page }) => {
        await page.getByTestId('username').fill(process.env.LOGIN_USERNAME!);
        await page.getByTestId('password').fill(process.env.LOGIN_PASSWORD!);
        await page.getByTestId('login-button').click();
        await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
        const carrinho = page.getByTestId('shopping-cart-badge');
        await expect(carrinho).toHaveText('1');
        await page.getByTestId('shopping-cart-link').click();
        await page.getByTestId('checkout').click();
        const usuario = page.getByTestId('firstName');
        await expect.soft(usuario).toHaveAttribute('placeholder', 'First Name');
        await page.getByPlaceholder('First Name').fill('João');
        await page.getByPlaceholder('Last Name').fill('Freire');
        await page.getByPlaceholder('Zip/Postal Code').fill('55760-000');
        await page.getByTestId('continue').click();
        await page.getByTestId('finish').click();
        const compraConluida = page.getByTestId('complete-header');
        await expect(compraConluida).toHaveText('Thank you for your order!');
        await page.getByTestId('back-to-products').click();
    })
})






