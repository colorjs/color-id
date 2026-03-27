import { test } from 'node:test'
import { strict as assert } from 'node:assert'
import to, { from } from './index.js'

test('pack normalized rgba', () => {
	assert.equal(to([0, 0, 0, 0]), 0)
	assert.equal(to([1, 1, 1, 1]), 0xffffffff)
	assert.equal(to([0, 0, 0, 1]), 0x000000ff)
	assert.equal(to([0, 0, 1, 0]), 0x0000ff00)
	assert.equal(to([0, 1, 0, 0]), 0x00ff0000)
	assert.equal(to([1, 0, 0, 0]), 0xff000000)
	assert.equal(to([1, 1, 0, 0]), 0xffff0000)
	assert.equal(to([0, 1, 1, 0]), 0x00ffff00)
})

test('default alpha is opaque', () => {
	assert.equal(to([1, 1, 1]), 0xffffffff)
})

test('clamps out-of-range', () => {
	assert.equal(to([2, 1, 1]), 0xffffffff)
	assert.equal(to([-1, -1, -1, -1]), 0)
})

test('distinct colors produce distinct ids', () => {
	assert.notEqual(to([31, 47, 185, 178.5], false), to([36, 54, 188, 178.5], false))
})

test('unpack normalized', () => {
	assert.deepEqual(from(0), [0, 0, 0, 0])
	assert.deepEqual(from(0xffffffff), [1, 1, 1, 1])
	assert.deepEqual(from(0x000000ff), [0, 0, 0, 1])
	assert.deepEqual(from(0x0000ff00), [0, 0, 1, 0])
	assert.deepEqual(from(0x00ff0000), [0, 1, 0, 0])
	assert.deepEqual(from(0xff000000), [1, 0, 0, 0])
	assert.deepEqual(from(0xffff0000), [1, 1, 0, 0])
	assert.deepEqual(from(0x00ffff00), [0, 1, 1, 0])
})

test('unpack byte values', () => {
	assert.deepEqual(from(0x00ffff00, false), [0, 255, 255, 0])
})

test('roundtrip', () => {
	assert.deepEqual(from(to([0.5, 0.25, 0.75, 1])), from(to([0.5, 0.25, 0.75, 1])))
	assert.equal(to(from(0xdeadbeef)), 0xdeadbeef)
})
