describe('Tela de cadastro Primário', () => {

    it('Cadastrando usuário com sucesso', () => {

      cy.viewport(1600, 900)
      cy.visit('https://medicp.softmakers.com.br/')
      cy.get('#about div a').should('have.text', 'Pedir agora')
      cy.get('button[class="styles_button__16eNk styles_primary__1Z4Lf styles_filled__27t3I styles_small__3eNKg').click()
      cy.get('input[id="name"').type('Joao Victor')
      cy.get('input[id="phone"').type('11 4141 5256')
      cy.get('.register_policyTerm__2_QFM > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
      cy.get('.register_formContainer__1xti8 > .styles_button__1Rs_e').click()

        //Massa de dados para tela de "Peça seu cartão"//
        // Nome : Joao Victor
        // Telefone : 11 4141 5256
  
       })

    it('Tentando se cadastrar com usuário inválido', () => {

        cy.viewport(1600, 900)
        cy.visit('https://medicp.softmakers.com.br/')
        cy.get('#about div a').should('have.text', 'Pedir agora')
        cy.get('button[class="styles_button__16eNk styles_primary__1Z4Lf styles_filled__27t3I styles_small__3eNKg').click()
        cy.get('input[id="name"').type('J0@40 V1C*!*0!2')
        cy.get('input[id="phone"').type('11 4141 5256')
        cy.get('.register_policyTerm__2_QFM > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
        cy.get('.register_formContainer__1xti8 > .styles_button__1Rs_e').click()  
  
          //Massa de dados para tela de "Peça seu cartão"//
          // Nome : J0@40 V1C*!*0!2
          // Telefone : 11 4141 5256
    
      })

    it('Tentando se cadastrar com telefone inválido', () => {

        cy.viewport(1600, 900)
        cy.visit('https://medicp.softmakers.com.br/')
        cy.get('#about div a').should('have.text', 'Pedir agora')
        cy.get('button[class="styles_button__16eNk styles_primary__1Z4Lf styles_filled__27t3I styles_small__3eNKg').click()
        cy.get('input[id="name"').type('J0@40 V1C*!*0!2')
        cy.get('input[id="phone"').type('!! 4141 S2S@6')
        cy.get('.register_policyTerm__2_QFM > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
        cy.get('.register_formContainer__1xti8 > .styles_button__1Rs_e').click()   
  
          //Massa de dados para tela de "Peça seu cartão"//
          // Nome : Joao Victor
          // Telefone : !! 4141 S2S@6
    
      }) 

describe('Tela de cadastro Secundária "Dados pessoais"', () =>{

/// Massa de dados 
/// CPF: 400217S2214
/// Phone : 11 4141 5256 


    it(' Realizando cadastro com sucesso', () => {

      cy.viewport(1600, 900)
      cy.visit('https://medicp.softmakers.com.br/')
      cy.get('#about div a').should('have.text', 'Pedir agora')
      cy.get('button[class="styles_button__16eNk styles_primary__1Z4Lf styles_filled__27t3I styles_small__3eNKg').click()
      cy.get('input[id="name"').type('Joao Victor')
      cy.get('input[id="phone"').type('11 4141 5256')
      cy.get('.register_policyTerm__2_QFM > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
      cy.get('.register_formContainer__1xti8 > .styles_button__1Rs_e').click()
      cy.get('#__next div h2').should('have.text', 'Dados Pessoais')
      cy.get('input[id="cpf"').type('93402533022')
      cy.get('input[id="rg"').type('112519234')
      cy.get('input[id="issuingAgency"').type('São Paulo/SP')
      cy.get('input[id="phone"').type('11 4141 5256')
      cy.get('input[id="birthday"').type('18061995')
      cy.get('#maritalStatus').select('Solteiro')
      cy.get('#genderIdentity').select('Transgênero')
      cy.get('button[type="submit"').click()
      cy.get('.register_title__XcDW9').should('have.text', 'Dados de endereço')

    })

})

  })