import {expect, test} from 'bun:test'

const {default: stableRandom} = await import('#src/main.ts')

test('should run', () => {
  const result = stableRandom()
  expect(result).toBe('stable-random') // TODO Test actual functionality
})
