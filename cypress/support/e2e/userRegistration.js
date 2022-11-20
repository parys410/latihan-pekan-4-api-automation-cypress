const { getRandomNumber } = require("../../helper/helper");

describe('POST /authaccount/registration', () => {
  it('successfull register a user', () => {
    const body = {
      "name": "Ary",
      "email": "parys" + getRandomNumber() + "@gmail.com",
      "password": 123456
    };
    console.log(body)

    cy.request('POST', '/authaccount/registration', body).as('registerUser');

    cy.get('@registerUser').then(res => {
      // Get Response Data and save to json
      cy.writeFile("cypress/fixtures/testdata.json", {
        "email": res.body.data.Email
      })

      expect(res.status).to.eq(200);
      expect(res.body.data.Name).to.eql(body.name);
      expect(res.body.data.Email).to.eql(body.email);
    });
  });
});