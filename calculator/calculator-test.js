describe("Check  Monthly Payment function", () => {
  it("should calculate the monthly rate correctly", function () {
    const values = { amount: 1000, rate: 6, years: 1 };
    expect(calculateMonthlyPayment(values)).toEqual("86.07");
  });

  it("should return a result with 2 decimal places", function () {
    const values = { amount: 2500, rate: 6, years: 2 };
    expect(calculateMonthlyPayment(values)).toEqual("110.80");
  });
});

/// etc
