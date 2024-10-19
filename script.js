const employees = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
];
function PrintDeveloperbyMap() {
    const developers = employees.map(employee => {
        if (employee.profession === "developer") {
            return employee;
        }
    }).filter(Boolean);
    console.log(developers);
}
function PrintDeveloperbyForEach() {
    employees.forEach(employee => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}
function addData() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    console.log(newEmployee);
}
function removeAdmin() {
    const updatedEmployees = employees.filter(employee => employee.profession !== "admin");
    console.log(updatedEmployees);
}
function ConcatinateArray() {
    const newEmployees = [
        { id: 5, name: "alice", age: "22", profession: "designer" },
        { id: 6, name: "bob", age: "23", profession: "manager" },
        { id: 7, name: "charlie", age: "21", profession: "tester" }
    ];
    const combinedArray = employees.concat(newEmployees);
    console.log(combinedArray);
}
