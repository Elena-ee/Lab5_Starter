// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// tests for isPhoneNumber
test('valid phone number: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number: 123-456-1234', () => {
  expect(isPhoneNumber('123-456-1234')).toBe(true);
});

test('invalid phone number: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-78bb')).toBe(false);
});

test('invalid phone number: 123-456-7890', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// tests for isEmail
test('valid email address: user@abc.com', () => {
  expect(isEmail('user@abc.com')).toBe(true);
});

test('valid email address: yuki@cld.com', () => {
  expect(isEmail('yuki@cld.com')).toBe(true);
});

test('invalid email address: user@.com', () => {
  expect(isEmail('user@.com')).toBe(false);
});

test('invalid email address: user.com', () => {
  expect(isEmail('user.com')).toBe(false);
});

// tests for isStrongPassword
test('valid strong password: Abcd1234', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});

test('valid strong password: a_b12', () => {
  expect(isStrongPassword('a_b12')).toBe(true);
});

test('invalid strong password: 1234', () => {
  expect(isStrongPassword('1234')).toBe(false);
});

test('invalid strong password: a#!1', () => {
  expect(isStrongPassword('a#!1')).toBe(false);
});

// tests for isDate
test('valid date: 5/7/2025', () => {
  expect(isDate('5/7/2025')).toBe(true);
});

test('valid date: 11/16/2025', () => {
  expect(isDate('11/16/2025')).toBe(true);
});

test('invalid date: 5/7/202', () => {
  expect(isDate('5/7/202')).toBe(false);
});

test('invalid date: 516/7/2025', () => {
  expect(isDate('516/7/2025')).toBe(false);
});

// tests for isHexColor
test('valid color: #FDC7C9', () => {
  expect(isHexColor('#FDC7C9')).toBe(true);
});

test('valid color: #BAE6ED', () => {
  expect(isHexColor('#BAE6ED')).toBe(true);
});

test('invalid color: #ZZZ', () => {
  expect(isHexColor('#ZZZ')).toBe(false);
});

test('invalid color: z22', () => {
  expect(isHexColor('z22')).toBe(false);
});