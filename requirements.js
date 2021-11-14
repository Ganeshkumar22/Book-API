/*
----- Requirements List -----

Books:
 - ISBN             -    String
 - Title            -    String
 - pubDate          -    String
 - Language         -    String
 - NumOfPages       -    Number
 - Authors          -    [Number]
 - Publication      -    Number  
 - Categories       -    [String]

Authors:
 - id               -    Number
 - name             -    String
 - books            -    [Sting]

Publications:
 - id               -    Number
 - name             -    String
 - books            -    [String]

 
---- API's ------

Need to write api's for the following routes:-

Books:
 - GET
    - to get all the books ✅
    - to get a specific book based on title ✅ 
    - to get a specific book based on isbn ✅
    - to get a list of books based on category ✅
    - to get a list of books based on languages ✅


Authors:
 - GET
    - to get all the authors ✅
    - to get a specific author based on id ✅
    - to get a specific author based on name ✅
    - to get a list of authors based on a book ✅


Publications:
 - GET
    - to get all the publication ✅
    - to get a specific publication based on id✅
    - to get a specific publication based on name ✅
    - to get a list of publication based on a book ✅


Post Request:
    - Add new books ✅
    - Add new publications ✅
    - Add new authors ✅


Put Request:
    - Update book details if author is changed ✅


Delete Request:
    - Delete a book ✅
    - Delete an author ✅
    - Delete author from book and related book from author ✅

*/