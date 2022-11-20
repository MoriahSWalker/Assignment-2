// // 2. Write a for loop that logs 0-15;
// for (let i = 0; i <= 15; i++) {
//   console.log(i)
//   }





// 3. Write a for loop that counts from 15-0
for (let i = 15; i >= 0; i--) {
  console.log(i)
}






// 4. Make variable laps = 0; write a for loop that logs (“that’s another lap!”) and adds 1 to the laps variable. AFTER the loop, log laps.
let laps=0
for (let laps = 1; laps <= 5; laps++) {
  console.log("that's another lap!" + (laps))
}



// 6. Make variable age. Make a loop from 0-100. In every loop check if i == age, if so log something, else say “age doesn’t match”.
age=27
  for (let i = 0; i < 100; i++) {
    if (age == i) {
      console.log((i) + "We have a match" 
      )
}
    else {
      console.log("age doesn't match")
    }
  }




//7. Write a loop that logs all even numbers from 0-700.
for (let i = 0; i <=700; i++) {
 if (i % 2 == 0) {
   console.log (i)}
}


//8. Write a loop that logs all odd numbers from 0-700.
for (let i = 0; i < 700; i++) {
  if (i % 2 > 0) {
    console.log (i)
  }
  
}



//9. Write a loop with some “if else” statements. The loop should start at 1900 and go to 1949 and log when things were invented. For example when i = 1902 the code should log “it is 1902 - the teddy bear is invented!”
timelineYears = [1900, 1902, 1910, 1913, 1918, 1923, 1935, 1938, 1943]
for (let i = 0; i < timelineYears.length; i++) {
  if (i == [0]) {
    console.log('1900 - What is a "Zeppelin?"')
  }
  if (i == [1]) {
    console.log( "1902 - Teddy Bear was Invented")
    
  }
  if (i == [2]){
    console.log("1910 - Talking Motion Picture")
  }
  if (i == [5]){
    console.log("1923 - The Traffic Signal")
  }
  
}



//9a. another way of doing 
timeline facts
timelineYears = [1900, 1902, 1910, 1913, 1918, 1923, 1935, 1938, 1943]


a = "1935 - The Radar was invented"
b = "1938 - The Ballpoint pen was invented"
c = "1943 - The Slinky was invented"
for (let i = 0; i < timelineYears.length; i++){
  if (i == [6]){
    console.log(a)
  }
  if (i == [7]){
    console.log(b)
  }
  if (i == [8]) {
    console.log(c)
    
  }
    
}