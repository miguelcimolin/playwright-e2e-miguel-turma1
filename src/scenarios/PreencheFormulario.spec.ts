import { test, expect } from '@playwright/test';
import RegisterPage from '../support/pages/RegisterPage';

const firstName = 'jão';
const lastName = 'do sal';
const adress = "quina da esquina";
const email = 'jao.sal@example.com';
const phone = '1231231233';
const password1 = "aaabbbccc";

test('Deve preencher o formulário de registro e exibir a mensagem de sucesso', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await page.goto('https://demo.automationtesting.in/Register.html');

  await registerPage.preencherFormularioRegistro(firstName, lastName, adress, email, phone, password1, "Android");
  
  await registerPage.submeterFormulario();
  
  await registerPage.validarMensagemSucesso();

});
