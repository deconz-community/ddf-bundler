import { expect, test } from 'vitest'

test('entry point', async () => {
  const module = await import('../exports')
  expect(module.sum).toBeDefined()
})
