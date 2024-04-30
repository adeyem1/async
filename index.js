async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// Example usage:
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);



//task 2
async function awaitCall() {
    // Simulate fetching data from an API
    const fetchData = () => {
        return new Promise(resolve => {
            // Simulate API response after 2 seconds
            setTimeout(() => {
                resolve("Mock API Data");
            }, 2000);
        });
    };

    // Use await to wait for the API response
    const data = await fetchData();

    // Log the data
    console.log(data);
}

// Example usage:
awaitCall();


//task 3
async function awaitCall() {
    // Simulate fetching data from an API
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            // Simulating an API call that fails
            setTimeout(() => {
                reject("Error: Failed to fetch data from API");
            }, 2000); // Simulating a 2-second delay for API response
        });
    };

    try {
        // Use await to wait for the API response
        const data = await fetchData();

        // Log the data
        console.log(data);
    } catch (error) {
        // Log user-friendly error message if API call fails
        console.error("An error occurred:", error);
    }
}

// Example usage:
awaitCall();
