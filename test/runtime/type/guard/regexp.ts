import { TypeGuard } from '@sinclair/typebox'
import { Type } from '@sinclair/typebox'
import { Assert } from '../../assert/index'

describe('type/guard/TRegExp', () => {
  it('Should guard for TRegExp 1', () => {
    const T = Type.RegExp(/foo/, { $id: 'T' })
    Assert.IsTrue(TypeGuard.IsSchema(T))
  })
  it('Should guard for TRegExp 1', () => {
    const T = Type.RegExp(/foo/, { $id: 'T' })
    Assert.IsTrue(TypeGuard.IsRegExp(T))
  })
  it('Should guard for TRegExp 2', () => {
    const T = Type.RegExp('foo', { $id: 'T' })
    Assert.IsTrue(TypeGuard.IsRegExp(T))
  })
  it('Should not guard for TRegExp 1', () => {
    // @ts-ignore
    const T = Type.RegExp('foo', { $id: 1 })
    Assert.IsFalse(TypeGuard.IsRegExp(T))
  })
})
