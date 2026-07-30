import test, { expect } from "@playwright/test";
import dotenv from 'dotenv';
dotenv.config();


test.beforeEach(async({page}) => {
    await page.goto("https://playwright.dev/")
})
test.describe('Tela Github', async ()=>{

    test('teste de nova aba', async({page}) => {


        //Definindo o proximo (evento) que vai aguardar pelo evento de criar uma nova pagina (GUIA)
        const pageUp = page.context().waitForEvent('page');
        await page.locator('.gh-text').click();

        //"Capturando" a nova pagina aberta para podermos controlá-la
        const newPage = await pageUp
        await newPage.waitForLoadState();
        
        console.log(newPage.title)
        await expect(page).toHaveURL('https://github.com/microsoft/playwright');
    })
})