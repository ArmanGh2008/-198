

document.getElementById("runButton").addEventListener("click", function() {
    // Get the user's code from the textarea
    let userCode = document.getElementById("userCode").value;

    try {
        // Execute the user's code
        let result = eval(userCode);
        let task1 ='def is_valid_triangle(a, b, c):';
        let task2 ='if a + b > c and a + c > b and b + c > a:';
        let task3 =' return "This is a valid triangle"';
        let task4 ='else:';
        let task5 =' return "This is not a valid triangle"';
        if (result === task1+task2+task3+task4+task5){
            
        }
        
        // Display the result
        document.getElementById("result").innerText = "Output: " + result;
    } catch (error) {
        // Display any error
        document.getElementById("result").innerText = "Error: " + error.message;
    }
});


function sum(a, b) {
    return a + b;
}
sum(3, 4);

