const text = "Hola Mundo";
test('Debe contener Mundo', () => {
    expect(text).toMatch(/Mundo/);
});

const fruits = ['Banana', 'Mango', 'Mamon', 'Patilla'];
test('¿Tenemos mango?', () => {
    expect(fruits).toContain('Mango')
})

test('Mayor que', () => {
    expect(10).toBeGreaterThan(9)
})


test('Verdadero', () => {
    expect(true).toBeTruthy()
})

const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
}
test('Probar un callback', () => {
    reverseString('hola', (str) => {
        expect(str).toBe('aloh')
    })
})

