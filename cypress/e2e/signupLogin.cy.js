describe('Signup and login', () => {
  const baseUrl = "http://localhost:3000";
  context.only('Login Tests', () => {
    beforeEach(() => {
      cy.visit(baseUrl);
    });

    const validUsers = [{
        email: 'test1@example.com',
        password: 'password123'
      },
      {
        email: 'test2@example.com',
        password: 'password456'
      },
      {
        email: 'test3@example.com',
        password: 'password789'
      },
    ];

    const invalidCredentials = [{
        email: 'invalid_user@g.com',
        password: 'wrong_password'
      },
      {
        email: 'user1',
        password: 'incorrect_password'
      },
      {
        email: '',
        password: 'password1'
      },
      {
        email: 'user1@email.com',
        password: ''
      },
    ];
    it('should successfully login with existing user credentials', () => {

      //check first username pass
      cy.get('[type="email"]').should('be.visible').type(validUsers[0].email)
      cy.get('[type="password"]').should('be.visible').type(validUsers[0].password)
      cy.get('[type="submit"]').click()
      cy.contains('Login Successful!').should('be.visible');

      cy.get('[type="email"]').clear();
      cy.get('[type="password"]').clear();

      //check second usertype pass
      cy.get('[type="email"]').should('be.visible').type(validUsers[1].email)
      cy.get('[type="password"]').should('be.visible').type(validUsers[1].password)
      cy.get('[type="submit"]').click()
      cy.contains('Login Successful!').should('be.visible');


      cy.get('[type="email"]').clear();
      cy.get('[type="password"]').clear();


      //check third usertype pass
      cy.get('[type="email"]').should('be.visible').type(validUsers[2].email)
      cy.get('[type="password"]').should('be.visible').type(validUsers[2].password)
      cy.get('[type="submit"]').click()
      cy.contains('Login Successful!').should('be.visible');

      cy.get('[type="email"]').clear();
      cy.get('[type="password"]').clear();
    });

    it('should display error message for invalid login credentials (test data {current.email}, {current.password})',
      () => {
        cy.get('[type="email"]').type(invalidCredentials[0].email);
        cy.get('[type="password"]').type(invalidCredentials[0].password);
        cy.get('[type="submit"]').click();

        // Verify error message is displayed
        cy.contains('Invalid login credentials.').should('be.visible');
      }
    );

    context.only('Signup Tests', () => {
      beforeEach(() => {
        cy.visit(`${baseUrl}/Register`);
      });
      // Successful Signup
      it('should allow successful signup with valid data', () => {
        const newEmail = 'newuser@test.com';
        const newPassword = 'password123';

        cy.get('[type="email"]').type(newEmail);
        cy.get('[type="password"]').eq(0).type(newPassword);
        cy.get('[type="password"]').eq(1).type(newPassword);
        cy.get('[type="submit"]').click();

      });

    });
  })
})