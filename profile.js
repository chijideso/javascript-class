var contacts = [
    {
        "firstname": "akira",
        "lastname": "desmond",
        "number": "08108659756",
        "likes": ["pizzas", "coding", "soccer"]
    },
   
    {
        "firstname": "harry",
        "lastname": "victor",
        "number": "07108659756",
        "likes": ["semo", "design", "vollyball"]
    },
    {
        "firstname": "oka",
        "lastname": "chijioke",
        "number": "07036902510",
        "likes": ["rice", "beans", "eba"]
    },
   
]

function profile(name, prop){
    for (var i= 0; i < contacts.length; i++){
        if (contacts[i].firstname === name){
            return contacts[i][prop];
        }
    }
    return "no such contacts"
}
var data = profile("oka", "number");
console.log(data);