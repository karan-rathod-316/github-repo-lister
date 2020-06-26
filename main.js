//9. Select the GitHub username input form
const gitHubForm = document.getElementById('gitHubForm')
    //15. Select the ul with id of userRepos
let ul = document.getElementById('userRepos');

//10. Add event listener to receive input from the form that we have defined in step 9
gitHubForm.addEventListener('submit', (e) => {
    //20. set ul to empty on re-redner(every time you search a new person)
    ul.innerHTML = ""
        //11. prevent the form from reloading the entire page on each click(which is its default behavior)
    e.preventDefault();
    //12. Select the text input field in the form
    let usernameInput = document.getElementById('usernameInput');
    //13. Extract the value from the tex input field
    let gitHubUserName = usernameInput.value;
    //14. Execute the API function, and pass in the Github username
    requestUserRepos(gitHubUserName);
})


function requestUserRepos(username) {
    // 1. XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    // 2. github endpoint from where we'll get the user data
    const url = `https://api.github.com/users/${username}/repos`;
    // 3. GET request
    xhr.open('GET', url, true);
    // 4. Processing the request that we have received
    xhr.onload = function() {
        //5. Parse API data to JSON
        const data = JSON.parse(this.response);
        console.log(data)
            //Check the response
        console.log(data);
        //8. Loop over each object in data array
        for (i in data) {
            //***We'll console log after step 8 to see everything is working, we'll replace the code in later steps*** 
            //console.log('Repo:',
            //     data[i].name);
            // console.log('Description:', data[i].description);
            // console.log('URL:', data[i].html_url);
            // console.log('===============');


            //16. Create li's that are to be added to the above ul
            let li = document.createElement('li');
            //17. Add class to each li
            li.classList.add('list-group-item')
                //18. Add html too each li
            li.innerHTML = (
                    `
                <p class="repo-name"><strong>Repo-name: </strong>${data[i].name};
                <p class="repo-description"><strong>Description: </strong> ${data[i].description} </p>
                <p class="repo-url"><strong>url: </strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>

                `
                )
                //19. Append li to the ul
            ul.appendChild(li);

        }
    }

    //6. Send the request to the serve
    xhr.send();

}

//7. Calling the above function to test it
// requestUserRepos("karan-rathod-316");