import { describe, expect, test } from 'vitest'
import { getLevelFromXP, getXPProgressInLevel } from './progress'

describe('progress helpers', () => {
  test('computes level from XP thresholds', () => {
    expect(getLevelFromXP(0)).toBe(1)
    expect(getLevelFromXP(199)).toBe(1)
    expect(getLevelFromXP(200)).toBe(2)
    expect(getLevelFromXP(599)).toBe(2)
    expect(getLevelFromXP(600)).toBe(3)
  })

  test('computes in-level progress values', () => {
    expect(getXPProgressInLevel(0)).toEqual({ current: 0, total: 200, pct: 0 })
    expect(getXPProgressInLevel(200)).toEqual({ current: 0, total: 400, pct: 0 })
    expect(getXPProgressInLevel(300)).toEqual({ current: 100, total: 400, pct: 25 })
  })
})
