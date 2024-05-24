let result = document.getElementById('result'); 


let alamaateMudaare = ['ا', 'ت', 'ی', 'ن'];

let maaziSeegha = ["َ", "َا", "ُوْا", "َتْ", "َتَا", "ْنَ", "ْتَ", "ْتُمَا", "ْتُمْ", "ْتِ", "ْتُمَا", "ْتُنَّ", "ْتُ", "ْنَا"];
let mudaareSeegha = ["ُ", "َانِ", "ُوْنَ", "ُ", "َانِ", "ْنَ", "ُ", "َانِ", "ُوْنَ", "ِیْنَ", "َانِ", "ْنَ", "ُ", "ُ"];

let alif = "ا";
let zabar = "َ"
let zer = "ِ"
let pesh = "ُ";
let jazm = "ْ";
let tashdeed = "ّ";
let lm = "لَمْ";
let ln = "لَنْ";
let laameTakeed = "لَ";
let nooneTakeedSaqila = "َنَّ";
let nooneTakeedKhafifa = "َنْ";
let laaeNahi = "لَا";
let laameAmar = "لِ"
let alifAmar = "ا"



document.getElementById('urduForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const char1 = document.getElementById('char1').value;
    const char2 = document.getElementById('char2').value;
    const char3 = document.getElementById('char3').value;


    const baab = document.getElementById('baab').value;

let maaziAin;
let mudaareAin;
let amar;

if(baab == "ن"){
    maaziAin = "َ";
    mudaareAin =  "ُ";
    amar = "ُ"
}
else if(baab == "ح"){
    maaziAin = "ِ";
    mudaareAin = "ِ";
    amar = "ِ"
}

else if(baab == "ض"){
    maaziAin = "َ";
    mudaareAin = "ِ";
    amar = "ِ"
}

else if(baab == "س"){
    maaziAin = "ِ";
    mudaareAin = "َ";
    amar = "ِ"
}

else if(baab == "ف"){
    maaziAin = "َ";
    mudaareAin = "َ";
    amar = "ِ"
}

else if(baab == "ک"){
    maaziAin = "ُ";
    mudaareAin = "ُ";
    amar = "ُ"
}

else{
    console.log("غیر متعلقہ باب");
}

    // const arabicWord = char1 + 'َ' + char2 + 'َ' + char3 + 'َ';

    result.innerHTML = `
    <table border=1.3 id="resultTable">
        <tr>
            <th> ماضی معروف </th> 
            <th> مضارع معروف </th> 
            <th> ماضی مجہول </th> 
            <th> مضارع مجہول </th> 
            <th> نفی جحد بلم معروف </th> 
            <th> نفی جحد بلم مجہول </th> 
            <th> نفی تاکید بلن معروف </th> 
            <th> نفی تاکید بلن مجہول </th> 
            <th> فعلِ امر معروف </th> 
            <th> فعلِ امر مجہول </th> 
            <th> نہی معروف </th> 
            <th> نہی مجہول </th> 
        </tr>

        <tr>
            <td> ${char1 + zabar + char2 + maaziAin + char3 + maaziSeegha[0]} </td>
            <td> ${alamaateMudaare[2] + zabar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[0]} </td>

            <td> ${char1 + pesh + char2 + zer + char3 + maaziSeegha[0]} </td>
            <td> ${alamaateMudaare[2] + pesh + char1 + jazm + char2 + zabar + char3 + mudaareSeegha[0]} </td>

            <td> ${lm + " " + alamaateMudaare[2] + zabar + char1 + jazm + char2 + mudaareAin + char3 + jazm} </td>
            <td> ${lm + " " + alamaateMudaare[2] + pesh + char1 + jazm + char2 + maaziAin + char3 + jazm} </td>

            <td> ${ln + " " + alamaateMudaare[2] + zabar + char1 + jazm + char2 + mudaareAin + char3 + zabar} </td>
            <td> ${ln + " " + alamaateMudaare[2] + pesh + char1 + jazm + char2 + maaziAin + char3 + zabar} </td>

            <td> ${laameAmar + alamaateMudaare[2] + zabar + char1 + jazm + char2 + mudaareAin + char3 + jazm} </td>
            <td> ${laameAmar + alamaateMudaare[2] + pesh + char1 + jazm + char2 + maaziAin + char3 + jazm} </td>

            <td> ${laaeNahi + alamaateMudaare[2] + zabar + char1 + jazm + char2 + mudaareAin + char3 + jazm} </td>
            <td> ${laaeNahi + alamaateMudaare[2] + pesh + char1 + jazm + char2 + maaziAin + char3 + jazm} </td>
        </tr>

        <tr>
            <td> ${char1 + zabar + char2 + maaziAin + char3 + maaziSeegha[1]} </td>
            <td> ${alamaateMudaare[2] + zabar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[1]} </td>

            <td> ${char1 + pesh + char2 + zer + char3 + maaziSeegha[1]} </td>
            <td> ${alamaateMudaare[2] + pesh + char1 + jazm + char2 + zabar + char3 + mudaareSeegha[1]} </td>

            <td> ${lm + " " + alamaateMudaare[2] + zabar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[1]} </td>
            <td> ${lm + " " + alamaateMudaare[2] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[1]} </td>

            <td> ${ln + " " + alamaateMudaare[2] + zabar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[1]} </td>
            <td> ${ln + " " + alamaateMudaare[2] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[1]} </td>

            <td> ${laameAmar + alamaateMudaare[2] + zabar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[1]} </td>
            <td> ${laameAmar + alamaateMudaare[2] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[1]} </td>

            <td> ${laaeNahi + alamaateMudaare[2] + zabar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[1]} </td>
            <td> ${laaeNahi + alamaateMudaare[2] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[1]} </td>
        </tr>

        <tr>
            <td> ${char1 + zabar + char2 + maaziAin + char3 + maaziSeegha[2]} </td>
            <td> ${alamaateMudaare[2] + zabar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[2]} </td>

            <td> ${char1 + pesh + char2 + zer + char3 + maaziSeegha[2]} </td>
            <td> ${alamaateMudaare[2] + pesh + char1 + jazm + char2 + zabar + char3 + mudaareSeegha[2]} </td>

            <td> ${lm + " " + alamaateMudaare[2] + zabar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[2]} </td>
            <td> ${lm + " " + alamaateMudaare[2] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[2]} </td>

            <td> ${ln + " " + alamaateMudaare[2] + zabar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[2]} </td>
            <td> ${ln + " " + alamaateMudaare[2] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[2]} </td>

            <td> ${laameAmar + alamaateMudaare[2] + zabar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[2]} </td>
            <td> ${laameAmar + alamaateMudaare[2] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[2]} </td>

            <td> ${laaeNahi + alamaateMudaare[2] + zabar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[2]} </td>
            <td> ${laaeNahi + alamaateMudaare[2] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[2]} </td>
        </tr>

        <tr>
            <td> ${char1 + zabar + char2 + maaziAin + char3 + maaziSeegha[3]} </td>
            <td> ${alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[3]} </td>

            <td> ${char1 + pesh + char2 + zer + char3 + maaziSeegha[3]} </td>
            <td> ${alamaateMudaare[1] + pesh + char1 + jazm + char2 + zabar + char3 + mudaareSeegha[3]} </td>

            <td> ${lm + " " + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + jazm} </td>
            <td> ${lm + " " + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + jazm} </td>

            <td> ${ln + " " + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + zabar} </td>
            <td> ${ln + " " + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + zabar} </td>

            <td> ${laameAmar + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + jazm} </td>
            <td> ${laameAmar + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + jazm} </td>

            <td> ${laaeNahi + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + jazm} </td>
            <td> ${laaeNahi + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + jazm} </td>
        </tr>

        <tr>
            <td> ${char1 + zabar + char2 + maaziAin + char3 + maaziSeegha[4]} </td>
            <td> ${alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[4]} </td>

            <td> ${char1 + pesh + char2 + zer + char3 + maaziSeegha[4]} </td>
            <td> ${alamaateMudaare[1] + pesh + char1 + jazm + char2 + zabar + char3 + mudaareSeegha[4]} </td>

            <td> ${lm + " " + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[1]} </td>
            <td> ${lm + " " + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[1]} </td>

            <td> ${ln + " " + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[1]} </td>
            <td> ${ln + " " + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[1]} </td>

            <td> ${laameAmar + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[1]} </td>
            <td> ${laameAmar + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[1]} </td>

            <td> ${laaeNahi + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[1]} </td>
            <td> ${laaeNahi + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[1]} </td>
        </tr>

        <tr>
            <td> ${char1 + zabar + char2 + maaziAin + char3 + maaziSeegha[5]} </td>
            <td> ${alamaateMudaare[2] + zabar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[5]} </td>

            <td> ${char1 + pesh + char2 + zer + char3 + maaziSeegha[5]} </td>
            <td> ${alamaateMudaare[2] + pesh + char1 + jazm + char2 + zabar + char3 + mudaareSeegha[5]} </td>

            <td> ${lm + " " + alamaateMudaare[2] + zabar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[5]} </td>
            <td> ${lm + " " + alamaateMudaare[2] + pesh + char1 + jazm + char2 + maaziAin + char3 + mudaareSeegha[5]} </td>

            <td> ${ln + " " + alamaateMudaare[2] + zabar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[5]} </td>
            <td> ${ln + " " + alamaateMudaare[2] + pesh + char1 + jazm + char2 + maaziAin + char3 + mudaareSeegha[5]} </td>

            <td> ${laameAmar + alamaateMudaare[2] + zabar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[5]} </td>
            <td> ${laameAmar + alamaateMudaare[2] + pesh + char1 + jazm + char2 + maaziAin + char3 + mudaareSeegha[5]} </td>

            <td> ${laaeNahi + alamaateMudaare[2] + zabar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[5]} </td>
            <td> ${laaeNahi + alamaateMudaare[2] + pesh + char1 + jazm + char2 + maaziAin + char3 + mudaareSeegha[5]} </td>
        </tr>

        <tr>
            <td> ${char1 + zabar + char2 + maaziAin + char3 + maaziSeegha[6]} </td>
            <td> ${alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[6]} </td>

            <td> ${char1 + pesh + char2 + zer + char3 + maaziSeegha[6]} </td>
            <td> ${alamaateMudaare[1] + pesh + char1 + jazm + char2 + zabar + char3 + mudaareSeegha[6]} </td>

            <td> ${lm + " " + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + jazm} </td>
            <td> ${lm + " " + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + jazm} </td>

            <td> ${ln + " " + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + zabar} </td>
            <td> ${ln + " " + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + zabar} </td>

            <td> ${alifAmar + amar + char1 + jazm + char2 + mudaareAin + char3 + jazm} </td>
            <td> ${laameAmar + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + jazm} </td>

            <td> ${laaeNahi + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + jazm} </td>
            <td> ${laaeNahi + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + jazm} </td>


        </tr>

        <tr>
            <td> ${char1 + zabar + char2 + maaziAin + char3 + maaziSeegha[7]} </td>
            <td> ${alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[7]} </td>

            <td> ${char1 + pesh + char2 + zer + char3 + maaziSeegha[7]} </td>
            <td> ${alamaateMudaare[1] + pesh + char1 + jazm + char2 + zabar + char3 + mudaareSeegha[7]} </td>

            <td> ${lm + " " + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[1]} </td>
            <td> ${lm + " " + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[1]} </td>

            <td> ${ln + " " + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[1]} </td>
            <td> ${ln + " " + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[1]} </td>

            <td> ${alifAmar + amar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[1]} </td>
            <td> ${laameAmar + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[1]} </td>

            <td> ${laaeNahi + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[1]} </td>
            <td> ${laaeNahi + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[1]} </td>


        </tr>

        <tr>
            <td> ${char1 + zabar + char2 + maaziAin + char3 + maaziSeegha[8]} </td>
            <td> ${alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[8]} </td>

            <td> ${char1 + pesh + char2 + zer + char3 + maaziSeegha[8]} </td>
            <td> ${alamaateMudaare[1] + pesh + char1 + jazm + char2 + zabar + char3 + mudaareSeegha[8]} </td>

            <td> ${lm + " " + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[2]} </td>
            <td> ${lm + " " + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[2]} </td>

            <td> ${ln + " " + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[2]} </td>
            <td> ${ln + " " + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[2]} </td>

            <td> ${alifAmar + amar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[2]} </td>
            <td> ${laameAmar + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[2]} </td>

            <td> ${laaeNahi + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[2]} </td>
            <td> ${laaeNahi + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[2]} </td>

        </tr>

        <tr>
            <td> ${char1 + zabar + char2 + maaziAin + char3 + maaziSeegha[9]} </td>
            <td> ${alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[9]} </td>

            <td> ${char1 + pesh + char2 + zer + char3 + maaziSeegha[9]} </td>
            <td> ${alamaateMudaare[1] + pesh + char1 + jazm + char2 + zabar + char3 + mudaareSeegha[9]} </td>

            <td> ${lm + " " + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + zer + "یْ"} </td>
            <td> ${lm + " " + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + zer + "یْ"} </td>

            <td> ${ln + " " + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + zer + "یْ"} </td>
            <td> ${ln + " " + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + zer + "یْ"} </td>

            <td> ${alifAmar + amar + char1 + jazm + char2 + mudaareAin + char3 + zer + "یْ" } </td>
            <td> ${laameAmar + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + zer + "یْ"} </td>

            <td> ${laaeNahi + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + zer + "یْ"} </td>
            <td> ${laaeNahi + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + zer + "یْ"} </td>

        </tr>

        <tr>
            <td> ${char1 + zabar + char2 + maaziAin + char3 + maaziSeegha[10]} </td>
            <td> ${alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[10]} </td>

            <td> ${char1 + pesh + char2 + zer + char3 + maaziSeegha[10]} </td>
            <td> ${alamaateMudaare[1] + pesh + char1 + jazm + char2 + zabar + char3 + mudaareSeegha[10]} </td>

            <td> ${lm + " " + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[1]} </td>
            <td> ${lm + " " + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[1]} </td>

            <td> ${ln + " " + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[1]} </td>
            <td> ${ln + " " + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[1]} </td>

            <td> ${alifAmar + amar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[1]} </td>
            <td> ${laameAmar + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[1]} </td>

            <td> ${laaeNahi + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + maaziSeegha[1]} </td>
            <td> ${laaeNahi + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + maaziSeegha[1]} </td>

        </tr>

        <tr>
            <td> ${char1 + zabar + char2 + maaziAin + char3 + maaziSeegha[11]} </td>
            <td> ${alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[11]} </td>

            <td> ${char1 + pesh + char2 + zer + char3 + maaziSeegha[11]} </td>
            <td> ${alamaateMudaare[1] + pesh + char1 + jazm + char2 + zabar + char3 + mudaareSeegha[11]} </td>

            <td> ${lm + " " + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[5]} </td>
            <td> ${lm + " " + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + mudaareSeegha[5]} </td>

            <td> ${ln + " " + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[5]} </td>
            <td> ${ln + " " + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + mudaareSeegha[5]} </td>

            <td> ${alifAmar + amar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[5]} </td>
            <td> ${laameAmar + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + mudaareSeegha[5]} </td>

            <td> ${laaeNahi + alamaateMudaare[1] + zabar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[5]} </td>
            <td> ${laaeNahi + alamaateMudaare[1] + pesh + char1 + jazm + char2 + maaziAin + char3 + mudaareSeegha[5]} </td>

        </tr>

        <tr>
            <td> ${char1 + zabar + char2 + maaziAin + char3 + maaziSeegha[12]} </td>
            <td> ${alamaateMudaare[0] + zabar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[12]} </td>

            <td> ${char1 + pesh + char2 + zer + char3 + maaziSeegha[12]} </td>
            <td> ${alamaateMudaare[0] + pesh + char1 + jazm + char2 + zabar + char3 + mudaareSeegha[12]} </td>

            <td> ${lm + " " + alamaateMudaare[0] + zabar + char1 + jazm + char2 + mudaareAin + char3 + jazm} </td>
            <td> ${lm + " " + alamaateMudaare[0] + pesh + char1 + jazm + char2 + maaziAin + char3 + jazm} </td>

            <td> ${ln + " " + alamaateMudaare[0] + zabar + char1 + jazm + char2 + mudaareAin + char3 + zabar} </td>
            <td> ${ln + " " + alamaateMudaare[0] + pesh + char1 + jazm + char2 + maaziAin + char3 + zabar} </td>

            <td> ${laameAmar + alamaateMudaare[0] + zabar + char1 + jazm + char2 + mudaareAin + char3 + jazm} </td>
            <td> ${laameAmar + alamaateMudaare[0] + pesh + char1 + jazm + char2 + maaziAin + char3 + jazm} </td>

            <td> ${laaeNahi + alamaateMudaare[0] + zabar + char1 + jazm + char2 + mudaareAin + char3 + jazm} </td>
            <td> ${laaeNahi + alamaateMudaare[0] + pesh + char1 + jazm + char2 + maaziAin + char3 + jazm} </td>

        </tr>

        <tr>
            <td> ${char1 + zabar + char2 + maaziAin + char3 + maaziSeegha[13]} </td>
            <td> ${alamaateMudaare[3] + zabar + char1 + jazm + char2 + mudaareAin + char3 + mudaareSeegha[13]} </td>

            <td> ${char1 + pesh + char2 + zer + char3 + maaziSeegha[13]} </td>
            <td> ${alamaateMudaare[3] + pesh + char1 + jazm + char2 + zabar + char3 + mudaareSeegha[13]} </td>

            <td> ${lm + " " + alamaateMudaare[3] + zabar + char1 + jazm + char2 + mudaareAin + char3 + jazm} </td>
            <td> ${lm + " " + alamaateMudaare[3] + pesh + char1 + jazm + char2 + maaziAin + char3 + jazm} </td>

            <td> ${ln + " " + alamaateMudaare[3] + zabar + char1 + jazm + char2 + mudaareAin + char3 + zabar} </td>
            <td> ${ln + " " + alamaateMudaare[3] + pesh + char1 + jazm + char2 + maaziAin + char3 + zabar} </td>

            <td> ${laameAmar + alamaateMudaare[3] + zabar + char1 + jazm + char2 + mudaareAin + char3 + jazm} </td>
            <td> ${laameAmar + alamaateMudaare[3] + pesh + char1 + jazm + char2 + maaziAin + char3 + jazm} </td>

            <td> ${laaeNahi + alamaateMudaare[3] + zabar + char1 + jazm + char2 + mudaareAin + char3 + jazm} </td>
            <td> ${laaeNahi + alamaateMudaare[3] + pesh + char1 + jazm + char2 + maaziAin + char3 + jazm} </td>

        </tr>

    </table>`;

});