 
 
       const resultsList = document.getElementById("results");
        const params = new URLSearchParams(window.location.search);
        
        params.forEach((value, key) => {
            resultsList.append(`${key}: ${value}`);
            resultsList.append(document.createElement('br'));
        })