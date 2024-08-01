describe("Authemtication", ()=>{


    it("Basic authentication", ()=>{

        cy.request(
                {

                    method: 'GET',
                    url: 'https://postman-echo.com/basic-auth',
                    auth: {
                        user: 'postman',
                        pass: 'password'
                    }
                    
                })
                .then((Response)=>{
                    expect(Response.status).to.eq(200)
                    expect(Response.body.authenticated).to.eq(true)
                })
    })
})