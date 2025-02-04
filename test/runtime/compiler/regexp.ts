import { Type } from '@sinclair/typebox'
import { Ok, Fail } from './validate'

describe('compiler/RegExp', () => {
  it('Should validate regular expression 1', () => {
    const T = Type.RegExp(/foo/i)
    Ok(T, 'foo')
    Ok(T, 'Foo')
    Ok(T, 'fOO')
    Fail(T, 'bar')
  })
  it('Should validate regular expression 2', () => {
    const T = Type.RegExp(/<a?:.+?:\d{18}>|\p{Extended_Pictographic}/gu)
    Ok(T, '♥️♦️♠️♣️')
  })
})
