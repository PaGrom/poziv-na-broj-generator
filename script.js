function generateControlNumber() {
    const sequence = document.getElementById("sequence").value;
    if (!sequence) {
        document.getElementById("result").innerText = "Please enter a sequence.";
        return;
    }

    try {
        const numericSequence = sequence
            .split("")
            .map(char => (isNaN(char) ? char.charCodeAt(0) : char))
            .join("");

        const numericData = BigInt(numericSequence) * 100n;
        const remainder = numericData % 97n;

        const controlNumber = (98n - remainder).toString().padStart(2, "0");

        document.getElementById("result").innerText = 
            `Control number: ${controlNumber}, Full Poziv Na Broj: ${controlNumber}-${sequence}`;
    } catch (error) {
        document.getElementById("result").innerText = "Invalid input or error in calculation.";
    }
}
