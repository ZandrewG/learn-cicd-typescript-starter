import { vi, describe, expect, test,  } from "vitest";
import { getAPIKey } from "src/api/auth";

describe('getAPIKey', () => {
    test('reject empty authorization headers', () => {
        const mockHttpHeader = {
            authorization: "",
        }

        const result = getAPIKey(mockHttpHeader) 

        expect(result).toEqual(null)
    })

    test('auth header length is invalid', () => {
        const mockHttpHeader = {
            authorization: "mock-test-data",
        }

        const result = getAPIKey(mockHttpHeader) 

        expect(result).toEqual(null)
    })

    test('auth header is corrupted', () => {
        const mockHttpHeader = {
            authorization: "AgiKey test-api-key",
        }

        const result = getAPIKey(mockHttpHeader) 

        expect(result).toEqual(null)
    })

    test('auth header is valid', () => {
        const mockHttpHeader = {
            authorization: "ApiKey test-api-key",
        }

        const result = getAPIKey(mockHttpHeader) 

        expect(result).toEqual("test-api-key")
    })
})

// const person = {
//   isActive: true,
//   age: 32,
// };

// describe("person", () => {
//   test("person is defined", () => {
//     expect(person).toBeDefined();
//   });

//   test("is active", () => {
//     expect(person.isActive).toBeTruthy();
//   });
// });