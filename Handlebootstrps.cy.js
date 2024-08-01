describe('Handle bootstrap', ()=>{

    it('select value', () => {
    
        cy.visit("https://formstone.it/components/dropdown/demo/")
        cy.get("#demo_label-dropdown-selected").click()
        cy.get(".fs-dropdown-item").each(function($ele, index, list){

            if ($ele.text() === 'Colorado'){
            cy.wrap($ele).should('have.text','Colorado' )
            

            }
        })



    })
})