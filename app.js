var userInp = prompt("Enter")
var d = userInp.toLowerCase()
var a = d.split("")
var b = a.reverse()
var c = b.join("")
if (d == c) {
    document.write("Palindrome")
} else {

    document.write("Not Palindrome")
}
document.write("<br> Original: ", userInp, "<br>");
document.write("Reverse: ", c);
