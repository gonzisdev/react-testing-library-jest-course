import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import { createServer } from "../../test/server"
import AuthButtons from "./AuthButtons"

// createServer() ---> GET 'api/users' ---> {user: null}
test('when user is not signed in, sign in and sign up are visible', async () => {

})

test('when user is not signed in, sign out is not visible', async () => {
    
})

// createServer() ---> GET 'api/users' ---> {user: {id: 3, email: asdf@a.com}}
test('when user issigned in, sign in and sign up are not visible', async () => {
    
})

test('when user is signed in, sign out is visible', async () => {
    
})