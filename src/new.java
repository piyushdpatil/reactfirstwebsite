public static int solve(int[] arr) {
    int maximumSum = -1;
    Map<Integer, Integer> biggestNumbers = new HashMap<>();
    for (int input : arr) {
        int sumOfDigits = calculateSumOfDigits(input);
        Integer biggestNumber = biggestNumbers.get(sumOfDigits);
        if (biggestNumber == null) {
            biggestNumbers.put(sumOfDigits, input);
        } else {
            int sum = input + biggestNumber;
            if (sum > maximumSum) {
                maximumSum = sum;
            }
            if (input > biggestNumber) {
                biggestNumbers.replace(sumOfDigits, input);
            }
        }
    }
    return maximumSum;
}

private static int calculateSumOfDigits(int input) {
    int sum = 0;
    while (input > 0) {
        sum += input % 10;
        input /= 10;
    }
    return sum;
}