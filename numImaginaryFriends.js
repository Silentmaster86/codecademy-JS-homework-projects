const numImaginaryFriends = totalFriends => Math.ceil(totalFriends * 0.25);


 console.log(numImaginaryFriends(20)) // Should print 5
 console.log(numImaginaryFriends(10)) // Should print 3 (2.5 rounded up!)