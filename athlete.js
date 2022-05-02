class Athlete {

    constructor(name, surname, yob, sport, palmares, gender, isRetired){
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.sport = sport;
        this.palmares = palmares;
        this.gender = gender;
        this.isRetired = isRetired;
    }

    getAge(){
        const now = new Date();
        return now.getFullYear() - this.yob;
    }

  

    bestResult(athlete){ 

        let selectedElement = 0;
                
        for (const point of this.palmares) {
                    
            if (selectedElement < point) {
            selectedElement = point;
            }
        } 
            
        return selectedElement;
    } 



    isAthleteRetired(){
        const retired = this.isRetired === true ? 'Yes' : 'No';
        return retired
    }



    toString() {
        const gender = this.gender === 'f' ? 'Femmina' : 'Maschio';
        const athleteString = 
        "Nome: " + this.name + '\n' +
        "Cognome: " + this.surname + '\n' +
        "Età: " + this.getAge() + '\n' + 
        "Genere: " + gender + '\n' +
        "Sport: " + this.sport +'\n' +
        "Palmares: " + this.bestResult() + '\n' +
        "Is retired? " + this.isAthleteRetired();
        return athleteString
    }

}
