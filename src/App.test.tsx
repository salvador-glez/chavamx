import React from 'react'
import { render } from '@testing-library/react'
import { describe } from 'vitest'
import App from './App'

describe('App', () => {
    test('should render', () => {
        render(<App />)
    })
})
