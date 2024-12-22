app.post("/", (req, res) => {
   const inputBookName = req.body.bookName
   const inputBookAuthor = req.body.bookAuthor
   const inputBookPages = req.body.bookPages
   const inputBookPrice = req.body.bookPrice
   
   books.push({
       bookName: inputBookName,
       bookAuthor: inputBookAuthor,
       bookPages: inputBookPages,
       bookPrice: inputBookPrice,
       bookState: "Available"
   })
   
   res.render("home", {
       data: books
   })
})

<form action="/issue" method="post">
     <input type="text" style="display: none;" 
             name="bookName" value="<%= element.bookName %>">
     <button type="submit">Issue</button>
</form>

app.post('/issue', (req, res) => {
   var requestedBookName = req.body.bookName;
   books.forEach(book => {
       if (book.bookName == requestedBookName) {
           book.bookState = "Issued";
       }
   })
   res.render("home", {
       data: books
   })
})

<form action="/delete" method="post">
      <input type="text" style="display: none;" 
              name="bookName" value="<%= element.bookName %>">
      <button type="submit">Delete</button>
</form>

app.post('/delete', (req, res) => {
   var requestedBookName = req.body.bookName;
   var j = 0;
   
   books.forEach(book => {
       j = j + 1;
       if (book.bookName == requestedBookName) {
           books.splice((j - 1), 1)
       }
   })
   
   res.render("home", {
       data: books
   })
})

