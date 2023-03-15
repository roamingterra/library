# library

Small library app putting into practice my knowledge in objects and object constructors

Skills put into practice for this project:

1. Objects
2. Object constructors
3. Inheritance
4. html forms
5. Form submission to JavaScript instead of backend (preventDefault())
6. Event bubbling (For exiting out of the modal window by clicking outside of the window)
7. onclick attribute functions
8. Modal windows with CSS and hiding them through JavaScript

Extra skill put into practice with the convert-to-classes branch:

1. Classes

Steps taken to complete this project:

1. Set up basic html skeleton
2. Create library array and object constructor
3. Set up basic CSS
4. Create function to generate book cards to be displayed in UI
5. Create function to display all book cards stored in myLibrary array
6. Add max container sizes for author and title in order to keep a uniform size for each book card
7. Make modal window with CSS
8. Make modal form appear and disappear through JavaScript, and clear user info after form submission
9. Take in form submission info in the JavaScript and add book to library
10. Add toggle function to book read status
11. Add remove book card function

Extra step taken: 12. I converted the object constructor to a class

The hardest part for me was to figure out how to toggle between two images, however this proved to be a simple solution
once I found out the technique. The other hard part was figuring out how to figure out the general process for adding books to
The library array and then displaying them on the UI

Potential Future Considerations:

1. Add storage capabilities to this project (the user will be able to close the application and their books will remain in the array)
2. Add cover page to each book card
3. Make the word count for the book title and author much larger and format the cards in a way that they can fit more words
4. Add some animation to the buttons and book cards to make the project look better
5. Add an explanation to the read icon when hovered over

**_ Feb 1 2023 update _**
I played around with and added fade in and create box animations to newly created book cards. My next goal when I get the chance will be to add a smooth transition animation when shrinking the window size and wrapping the book cards.

**_ Mar 15 2023 update _**
Fixed a bug which made long titles with no spaces overflow off of the book card.
