function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (dob) {
        const dobDate = new Date(dob);
        const now = new Date();

        let age = now.getFullYear() - dobDate.getFullYear();
        const monthDifference = now.getMonth() - dobDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && now.getDate() < dobDate.getDate())) {
            age--;
        }

        document.getElementById('result').innerText = `You are ${age} years old.`;
    } else {
        document.getElementById('result').innerText = 'Please select a valid date of birth.';
    }
}
