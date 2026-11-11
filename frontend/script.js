async function createUser() {

    const username = document.getElementById("username").value;

    try {

        const response = await fetch(
            "http://localhost:5000/api/users",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    username: username
                })
            }
        );

        const data = await response.json();

        document.getElementById("message").innerText = data.message;

    } catch (error) {

        document.getElementById("message").innerText =
            "Unable to connect to backend";

    }
}