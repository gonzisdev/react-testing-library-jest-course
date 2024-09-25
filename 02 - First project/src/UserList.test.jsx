import React from "react"
import { render, screen, within } from "@testing-library/react"
import '@testing-library/jest-dom'
import user from "@testing-library/user-event"
import { UserList } from "./UserList"

function renderrComponent() {
    const users = [
        {name: 'jane', email: 'jane@jane.com'},
        {name: 'sam', email: 'sam@sam.com'}
    ]
    render(<UserList users={users} />)
    return {
        users
    }
}

test('render the correct number of rows', () => {
    renderrComponent()
    //const { container } = render(<UserList users={users} />)

    const rows = within(screen.getByTestId('users')).getAllByRole('row') // Preferable
    // const table = container.querySelector('table')
    // const rows = container.querySelectorAll('tbody tr')

    expect(rows).toHaveLength(2)

})

test('render the email and name of each user', () => {
    const { users } = renderrComponent()
    
    //screen.logTestingPlaygroundURL()
    for(let user of users) {
        const name = screen.getByRole('cell', { name: user.name })
        const email = screen.getByRole('cell', { name: user.email })
        
        expect(name).toBeInTheDocument()
        expect(email).toBeInTheDocument()
    }
})