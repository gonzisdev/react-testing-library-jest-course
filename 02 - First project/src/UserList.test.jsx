import React from "react"
import { render, screen, within } from "@testing-library/react"
import '@testing-library/jest-dom'
import user from "@testing-library/user-event"
import { UserList } from "./UserList"

test('render the correct number of rows', () => {
    const users = [
        {name: 'jane', email: 'jane@jane.com'},
        {name: 'sam', email: 'sam@sam.com'}
    ]
    const { container } = render(<UserList users={users} />)

    const rows = within(screen.getByTestId('users')).getAllByRole('row') // Preferable
    // const table = container.querySelector('table')
    // const rows = container.querySelectorAll('tbody tr')

    expect(rows).toHaveLength(2)

})

test('render the email and name of each user', () => {
    
})