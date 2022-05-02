class Vitamin{

    constructor(name, brand, dosage, quantity, onPrescription){
        
        this.name = name;
        this.brand = brand;
        this.dosage = dosage;
        this.quantity = quantity;
        this.onPrescription = onPrescription;
    }


    MaxDose(){
        let dose = this.dosage[0];
        for (let i = 1; i < this.dosage.length; i++) {

            if (this.dosage[i] > dose) {
                dose = this.dosage[i];
            }
        } return dose
    }

    isonPrescription(){
        const prescripted = this.onPrescription === true ? 'Yes' : 'No';
        return prescripted
    }
    

    toString(){
        const vitaminString = 
        "Nome: " + this.name + '\n' +
        "Brand: " + this.brand + '\n' +
        "Dosage: " + this.MaxDose() + '\n' +
        "Quantity: " + this.quantity + '\n' +
        "Is this vitamin need a prescription? " + this.onPrescription;
        return vitaminString
    }


}


