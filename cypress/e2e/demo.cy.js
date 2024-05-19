// What is the Cypress Testing Library? 
/* 
    Cypress Testing Library is an extension of the popular end-to-end testing framework Cypress.
    It provides a set of utilities for writing tests that focus on the user interactions and behaviors
    rather than the implementation details of the web application. It is inspired by and built to work seamlessly
    with Testing Library, which is designed to encourage good testing practices by prioritizing testing the application
    the way users interact with it.
*/

/*
    The library provides user-centric queries that allow you to select elements based on their accessibility roles, text content, labels, etc. 
    This aligns with how users interact with the application, making the tests more readable and maintainable.
*/

// Why It Should Be Implemented?
/* 
    1- Improved Readability:

    Tests are more readable and closer to how users interact with the application. This makes it easier for developers to understand what the tests are doing and why they might be failing.

    2- Accessibility Focus:

    By using queries like getByRole or getByLabelText, you inherently make your tests more accessible. This also encourages the development of accessible web applications.

    3- Less Brittle Tests:

    Tests are less likely to break due to changes in the implementation details such as class names or IDs. Instead, they focus on elements as users would perceive them (by text, role, etc.).

    4-Seamless Integration:

    Cypress Testing Library integrates smoothly with Cypress, leveraging its powerful features like time travel, real-time reloads, and powerful debugging capabilities.

    5- Community and Support:

    Cypress and Testing Library both have active communities and good documentation, providing ample resources for learning and troubleshooting.

*/

describe('Cypress testing library demo', ()=>{
    
    it('Link Role', ()=>{
        cy.findByRole('link', {name: /Community/i}).click();
        cy.url().should('include', '/blog')
    })
    
    it('Button Role', ()=>{
        cy.findByRole('button', {name: /install cypress/i}).click();
        //You can also use the standard cy.get()
        cy.get('#cy_modal_label').should('have.text', 'Installing Cypress')
    })

    it('PlaceHolder Text', ()=>{
        cy.visit('/blog')
        cy.findByPlaceholderText('Search the blog').type('Testing')
    })

    //There are other options:
    /*
        cy.findByLabelText('Username'); -> : This method queries elements associated with a label, such as form inputs. It supports accessibility by ensuring labels are used correctly.
        cy.findByAltText('Profile picture'); -> This method queries elements based on their alt text, typically used for images.
        cy.findByTitle('Close'); -> cy.findByTitle('Close');
    */
})