import '../common/index.js'
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then(
    'the interpretations link contains an icon with a number greater than 0',
    () => {
        cy.get('[data-test="headerbar-interpretations-count"]').should(
            ($count) => {
                expect(parseInt($count.text(), 10)).to.be.greaterThan(0)
            }
        )
    }
)
