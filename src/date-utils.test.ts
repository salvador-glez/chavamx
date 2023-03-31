import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import getFullYear from './date-utils'

describe('getFullYear', () => {
    beforeEach(() => {
        // tell vitest we use mocked time
        vi.useFakeTimers()
    })

    afterEach(() => {
        // restoring date after each test run
        vi.useRealTimers()
    })

    test('gets current year', () => {
        const mockedSystemDate = new Date(2000, 1, 1, 1)
        vi.setSystemTime(mockedSystemDate)
        expect(getFullYear()).toBe(2000)
    })
})
