function Calculate(initialAmount) {
    let remainingAmount = initialAmount;

    for (let day = 0; day < 7; day++) {
        let usedAmount = remainingAmount / 3;
        remainingAmount -= usedAmount;
    }

    return remainingAmount;
}

const initialAmount = 5832;
const remainingAmount = Calculate(initialAmount);
console.log(`น้ำที่เหลืออยู่ในถังหลังจาก 7 วัน: ${remainingAmount.toFixed(2)} ลิตร`);
