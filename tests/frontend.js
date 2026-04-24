function hasInput(color) {
    return color !== "";
}

test('validates that the color input is not empty', () => {
    expect(hasInput("Blue")).toBe(true);
});