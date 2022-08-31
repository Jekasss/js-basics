function pow(x, n) {
    if (n < 0) {
        return NaN;
    } else if (Math.round(n) != n) {
    return NaN;
    } else {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
    }
  }