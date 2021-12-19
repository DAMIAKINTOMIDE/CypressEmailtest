/// <reference types="cypress"/>

context("login", () =>{
    const serverid = "ttf09ue3";
    const serverDomain = "ttf09ue3.mailosaur.net";
    const emailaddress = "login@"+serverDomain;
    
    it('Makes a Password Reset request', () => {
        cy.visit('https://mailosaur.com/app/servers/')
        cy.get('#email').type('damiakintomide@gmail.com')

    })

    it('send email', () => {
        cy.get('#root > div > div.layout__content > div.css-nil.ub-b-btm_1px-solid-E4E7EB.ub-bg_11ev722.ub-h_46px.ub-dspl_flex.ub-algn-itms_center.ub-just-cnt_center.ub-box-szg_border-box > div > a:nth-child(7)').click()
        cy.get('#downshift-0-input').type(emailaddress)
        cy.get('#subject').type('Hi')
        cy.get('#TextareaField-34').type('Automation Test')
        cy.get('#root > div > div.layout__content > div.css-nil.ub-bs_17sc08g.ub-bg_11ev722.ub-bblr_5px.ub-bbrr_5px.ub-btlr_5px.ub-btrr_5px.ub-w_800px.ub-mb_40px.ub-mt_40px.ub-ml_auto.ub-mr_auto.ub-dspl_flex.ub-pb_32px.ub-pl_32px.ub-pr_32px.ub-pt_32px.ub-flx-drct_column.ub-box-szg_border-box > form > button').click()

    })

    it('Gets email', () => {   
        cy.mailosaurGetMessage(serverId, {
            sentTo: emailaddress
        }).then(email => {
            expect(email.subject).to.equal('Automation Test');
           
        })

    })
})