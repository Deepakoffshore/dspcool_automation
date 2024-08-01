describe('Handle autosuggession', ()=>{

    it('select value', () => {
    
        cy.visit("https://www.google.com/")
        cy.get("#APjFqb").type('mukesh otwani')
        cy.get("div[role='option']").each(function($ele, index, list){

           if ($ele.text().includes('mukesh otwani course')){

            cy.wrap($ele).click()

            
           }else{
            cy.log($ele.text())
           }


                     

            })
        })
})