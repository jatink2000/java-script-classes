


let students = [
    { "rollno": 1, "firstname": "Amit", "lastname": "Sharma", "city": "Jaipur", "course": "Python" },
    { "rollno": 2, "firstname": "Nirmal", "lastname": "Kumar", "city": "Alwar", "course": "Python" },
    { "rollno": 3, "firstname": "Rahul", "lastname": "Verma", "city": "Delhi", "course": "Java" },
    { "rollno": 4, "firstname": "Neha", "lastname": "Singh", "city": "Ajmer", "course": "React" },
    { "rollno": 5, "firstname": "Rohit", "lastname": "Meena", "city": "Kota", "course": "NodeJS" },
    { "rollno": 6, "firstname": "Pooja", "lastname": "Gupta", "city": "Udaipur", "course": "Python" },
    { "rollno": 7, "firstname": "Suresh", "lastname": "Yadav", "city": "Rewari", "course": "MongoDB" },
    { "rollno": 8, "firstname": "Anjali", "lastname": "Bansal", "city": "Jaipur", "course": "Java" },
    { "rollno": 9, "firstname": "Vikas", "lastname": "Jain", "city": "Bikaner", "course": "React" },
    { "rollno": 10, "firstname": "Kavita", "lastname": "Mishra", "city": "Indore", "course": "Python" },
    { "rollno": 11, "firstname": "Arjun", "lastname": "Patel", "city": "Ahmedabad", "course": "NodeJS" },
    { "rollno": 12, "firstname": "Sneha", "lastname": "Choudhary", "city": "Sikar", "course": "Java" },
    { "rollno": 13, "firstname": "Deepak", "lastname": "Saini", "city": "Jhunjhunu", "course": "Python" },
    { "rollno": 14, "firstname": "Ritu", "lastname": "Khandelwal", "city": "Jaipur", "course": "React" },
    { "rollno": 15, "firstname": "Manish", "lastname": "Agarwal", "city": "Mathura", "course": "MongoDB" },
    { "rollno": 16, "firstname": "Komal", "lastname": "Joshi", "city": "Ujjain", "course": "Python" },
    { "rollno": 17, "firstname": "Sunil", "lastname": "Lodhi", "city": "Gwalior", "course": "Java" },
    { "rollno": 18, "firstname": "Payal", "lastname": "Saxena", "city": "Bareilly", "course": "React" },
    { "rollno": 19, "firstname": "Mohit", "lastname": "Pandey", "city": "Lucknow", "course": "NodeJS" },
    { "rollno": 20, "firstname": "Nisha", "lastname": "Arora", "city": "Delhi", "course": "Python" },
    { "rollno": 21, "firstname": "Kunal", "lastname": "Kapoor", "city": "Chandigarh", "course": "Java" },
    { "rollno": 22, "firstname": "Shivani", "lastname": "Rathore", "city": "Jodhpur", "course": "React" },
    { "rollno": 23, "firstname": "Ankit", "lastname": "Shekhawat", "city": "Sikar", "course": "Python" },
    { "rollno": 24, "firstname": "Meena", "lastname": "Solanki", "city": "Dungarpur", "course": "MongoDB" },
    { "rollno": 25, "firstname": "Harsh", "lastname": "Bhardwaj", "city": "Noida", "course": "NodeJS" },
    { "rollno": 26, "firstname": "Rashmi", "lastname": "Kulkarni", "city": "Pune", "course": "Python" },
    { "rollno": 27, "firstname": "Tushar", "lastname": "Malhotra", "city": "Ludhiana", "course": "Java" },
    { "rollno": 28, "firstname": "Isha", "lastname": "Nagpal", "city": "Amritsar", "course": "React" },
    { "rollno": 29, "firstname": "Naveen", "lastname": "Chauhan", "city": "Meerut", "course": "Python" },
    { "rollno": 30, "firstname": "Preeti", "lastname": "Goyal", "city": "Hisar", "course": "MongoDB" },

    { "rollno": 31, "firstname": "Abhishek", "lastname": "Tripathi", "city": "Prayagraj", "course": "NodeJS" },
    { "rollno": 32, "firstname": "Sonam", "lastname": "Rani", "city": "Patna", "course": "Python" },
    { "rollno": 33, "firstname": "Vivek", "lastname": "Rajput", "city": "Bhopal", "course": "Java" },
    { "rollno": 34, "firstname": "Kirti", "lastname": "Malik", "city": "Rohtak", "course": "React" },
    { "rollno": 35, "firstname": "Ajay", "lastname": "Thakur", "city": "Shimla", "course": "Python" },
    { "rollno": 36, "firstname": "Monika", "lastname": "Bisht", "city": "Dehradun", "course": "MongoDB" },
    { "rollno": 37, "firstname": "Sanjay", "lastname": "Rawat", "city": "Nainital", "course": "NodeJS" },
    { "rollno": 38, "firstname": "Pankaj", "lastname": "Kashyap", "city": "Kanpur", "course": "Java" },
    { "rollno": 39, "firstname": "Divya", "lastname": "Shukla", "city": "Faizabad", "course": "React" },
    { "rollno": 40, "firstname": "Rakesh", "lastname": "Chandra", "city": "Varanasi", "course": "Python" },

    { "rollno": 41, "firstname": "Alok", "lastname": "Srivastava", "city": "Gorakhpur", "course": "NodeJS" },
    { "rollno": 42, "firstname": "Swati", "lastname": "Tiwari", "city": "Satna", "course": "Python" },
    { "rollno": 43, "firstname": "Yogesh", "lastname": "Beniwal", "city": "Sirsa", "course": "Java" },
    { "rollno": 44, "firstname": "Kiran", "lastname": "Deshmukh", "city": "Nagpur", "course": "React" },
    { "rollno": 45, "firstname": "Ashish", "lastname": "Rao", "city": "Gurgaon", "course": "MongoDB" },
    { "rollno": 46, "firstname": "Bhavna", "lastname": "Sethi", "city": "Faridabad", "course": "Python" },
    { "rollno": 47, "firstname": "Nitin", "lastname": "Kohli", "city": "Panipat", "course": "NodeJS" },
    { "rollno": 48, "firstname": "Rekha", "lastname": "Kumari", "city": "Ranchi", "course": "Java" },
    { "rollno": 49, "firstname": "Sagar", "lastname": "Nayak", "city": "Bhubaneswar", "course": "React" },
    { "rollno": 50, "firstname": "Priyanka", "lastname": "Patil", "city": "Kolhapur", "course": "Python" },
    { "rollno": 31, "firstname": "Abhishek", "lastname": "Tripathi", "city": "Prayagraj", "course": "NodeJS" },
    { "rollno": 32, "firstname": "Sonam", "lastname": "Rani", "city": "Patna", "course": "Python" },
    { "rollno": 33, "firstname": "Vivek", "lastname": "Rajput", "city": "Bhopal", "course": "Java" },
    { "rollno": 34, "firstname": "Kirti", "lastname": "Malik", "city": "Rohtak", "course": "React" },
    { "rollno": 35, "firstname": "Ajay", "lastname": "Thakur", "city": "Shimla", "course": "Python" },
    { "rollno": 36, "firstname": "Monika", "lastname": "Bisht", "city": "Dehradun", "course": "MongoDB" },
    { "rollno": 37, "firstname": "Sanjay", "lastname": "Rawat", "city": "Nainital", "course": "NodeJS" },
    { "rollno": 38, "firstname": "Pankaj", "lastname": "Kashyap", "city": "Kanpur", "course": "Java" },
    { "rollno": 39, "firstname": "Divya", "lastname": "Shukla", "city": "Faizabad", "course": "React" },
    { "rollno": 40, "firstname": "Rakesh", "lastname": "Chandra", "city": "Varanasi", "course": "Python" }
]


let studtable=document.getElementById("studdata")

students.map((data)=>{

    // create a table row using the js: 
   let tablerow=document.createElement("tr")
    

   // create a table data using the js: 
   let rollnum=document.createElement("td")
   rollnum.innerHTML=data.rollno

   let firstname=document.createElement("td")
   firstname.innerHTML=data.firstname

   let lastname=document.createElement("td")
   lastname.innerHTML=data.lastname

   let city=document.createElement("td")
   city.innerHTML=data.city


   let course=document.createElement("td")
   course.innerHTML=data.course

   tablerow.appendChild(rollnum)
   tablerow.appendChild(firstname)
   tablerow.appendChild(lastname)
   tablerow.appendChild(city)
   tablerow.appendChild(course)


   studtable.appendChild(tablerow)
})

