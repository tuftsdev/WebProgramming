# Thursday, January 16th: Course Introduction
* Why the web?  Why are you here?
* Motivation 1, the first web page (1992): http://info.cern.ch/hypertext/WWW/TheProject.html
* Motivation 1A: http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html
* Motivation 2: http://www.dolekemp96.org/
* Motivation 3: https://archive.org/
* What this course is not...
* What this course is...
  * Why I still like teaching this class...
* Administrativa:
  1. The bad news: course is closed, wait-list
  2. No final exam for this class, book travel now
  3. Lab 1 up
* How two computers talk to each other: basic networking
* The Internet vs the World Wide Web

# Tuesday, January 22nd: HTTP
* PSA on sexual harassment
* Last class: the big ideas?
* Recall telephone conversation example
* Telephone extension numbers
* So what is the web?
* Two special computers: web server and web client
* URLs:
  `protocol://domain/<any directories here>/<filename>`
* The big idea of HTTP, how the web works: request-response, similar to Q&A
* Examining HTTP requests and responses on Reddit...
* HTTP commands: GET and POST
  - GET: Download data
  - POST: Upload data, send data to web server
  
# Thursday, January 24th: HTML
* Last class: recall how HTTP works
* Recall question: if no port number is provided, the default port number to connect to on web server is...?
* Recall question: what HTTP command is executed when entering URL address?
* Q: How to browse web without web browser?
* Demo: Web server
* Recall question: if no file is provided in URL, the file with what name is generally served by default?
* Take a look at the HTML
* What is markup?
  - The paragraph analogy
* Motivation: writing
* Block vs. inline elements
* Attributes
* Image --a special tag...
* Anchors
* Absolute vs relative URLs
* W3C validator

# Tuesday, January 29th: Revision Control with Git
* Recall: block elements, absolute vs relative sources, W3C validator, example
* What's wrong with the HTML?
* What I've noticed in the past: many connecting to Tufts CS to do work via SSH, questions on submitting assignments and labs in this class, how to upload web pages to a server
* The nightmare scenario that illustrates the need for revision control: in the past...
* What if I need to hire developers to work on different pieces of a projet?
* Why revision control? Keep track of changes, document changes
* Why Git? Speed, no dependency of a remote server (unlike Subversion)
* Why GitHub for repositories? Network effect, communications
* Example with our course website
* IMPORTANT: you are not expected to master Git by the end of this course.  The reality, even for the most seasoned people: https://twitter.com/ErrataRob/status/707327952158121984

# Thursday, January 31st: Cascading Style Sheets (CSS)
* Why do you want to separate style?
* One CSS _rule_ is made up of _selectors_ and _declarations_. A declaration is a _property-value_ pair.
  - You really want to refer to a CSS cheat sheet!
* Three types of selectors: HTML tag names, ID, class
  - ID: should only be used once; starts with "#"
  - class: can be used many times; start with "."
  - Mixing IDs and classes is confusing, generally not a good idea.
  - "id" and "class" attribute exist for all HTML elements
  - Generic block HTML element: div
  - Generic inline HTML element: span
* Box model for HTML body elements
* The "cascading" in "cascading style sheet"
  - What if there is more than one style specified for an HTML element?

# Tuesday, February 5th: Responsive Design
* Last class: CSS
* Why CSS?  What do they give you?
* Recall: id vs class
* Recall: what is cascading?
* Question: _how do you build a web browser?_
* Loading additional stylesheets
* Today: mobile
* Take out your phone or mobile device.  Go to...
* How mobile web browsers work: render pages in a virtual window (i.e., the viewport), usually wider than the screen, so they don't need to squeeze every page layout into a tiny window. Users can pan and zoom to see different areas of the page.  That is, a mobile browser it will assume that you are viewing a desktop experience and that you want to see all of it.
* `<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />` => your layout will be displayed properly at 1:1 scale.  No zooming will be applied.
* So can I have a different stylesheets for different screen sizes and devices?
  - http://broadcast.oreilly.com/2010/04/using-css-media-queries-ipad.html
  - `<link rel="stylesheet" media="all and (max-device-width: 480px)" href="iphone.css">`
  - `<link rel="stylesheet" media="all and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait)" href="ipad-portrait.css">`
  - `<link rel="stylesheet" media="all and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape)" href="ipad-landscape.css">`
  - `<link rel="stylesheet" media="all and (min-device-width: 1025px)" href="ipad-landscape.css">`
* Can I have different rules in a CSS for different screen sizes (e.g., widths)?
* Gmail: http://googleappsdeveloper.blogspot.com/2016/09/your-emails-optimized-for-every-screen-with-responsive-design.html
* Your next lab
* Why this technique?

# Thursday, February 7th: JavaScript
* File permissions
* So far, we have covered quite a bit: HTTP, HTML, CSS, Git
* What are the problems and limitations with just HTML and CSS?
* HTTP: stateless protocol, no memory of previous requests
* In the early 90s, "Netscape quickly realized that the Web needed to become more dynamic. Even if you simply wanted to check that users entered correct values in a form, you needed to send the data to the server in order to give feedback." http://speakingjs.com/es5/ch04.html
* Our focus is still on the client-side
* Variables: dynamic typing but will be one of the following: number, string, array, object, boolean
  - Three states of a variable: (1) not set yet (undefined), (2)set to nothing (null), (3) set to a valid value
* Operations: "+" is interesting
* Lists (a.k.a., arrays)
* _(Almost)_ everything in JavaScript is an object_ https://stackoverflow.com/questions/9108925/how-is-almost-everything-in-javascript-an-object
* Okay, but how do I use JavaScript in an HTML page?  Or how do I dynamically modify a loaded HTML page using JavaScript?

# Tuesday, February 12th: Document Object Model (DOM)
* Last class: JavaScript data and data structures (lists and dictionaries)
* The big idea: using JavaScript to dynamically modify HTML content _after it is loaded_.  Yes, you can mix HTML and JavaScript
* Today: the "var" keyword, using JavaScript in an HTML page
* The document object: a JavaScript object that contains the entire structure of an HTML page after it is loaded, in tree-like format (thus, known as the Document Object Model tree).  Example of a DOM tree: https://developer.mozilla.org/en-US/docs/Using_the_W3C_DOM_Level_1_Core
* Example 1: Fiddle https://jsfiddle.net/mchow01/0wga8wLp/3/?utm_source=website&utm_medium=embed&utm_campaign=0wga8wLp
* Example 2: Highlighting paragraphs in an HTML document

# Thursday, February 14th: Functions in JavaScript
* Your Assignment 2
* Recall: almost everything in JavaScript is a/an ______
* Too many built-in JavaScript objects to name: string, Date, Math
* Special object in JavaScript: the associative array a.k.a., dictionary a.k.a., hash a.k.a., finite map
* So what about functions?
* Function arguments: (1) too many: extras ignored, (2) too few: remainders get an undefined value
* Who is in COMP 105 currently or have taken COMP 105?
* What if I told you functions can be used as values to variables? Functions as arguments to functions? That's what it means by functions as first-class!
* Consider example at http://www.joelonsoftware.com/items/2006/08/01.html
* Recall Algebra: function composition
* Why is this a powerful idea?
  - Reduce repetitive code
  - More reusable and scalable code
  - "Object Oriented Programming" in JavaScript
  - Example: `apply` https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
* Example: https://jsfiddle.net/mchow01/72j6knum/1/
* Is this idea that important in JavaScript? Yes, not only in JavaScript but in many languages and frameworks as well
  - Events
  - Callbacks (e.g., working with the GPS)
  - Asynchronous communications (e.g., downloading data from the web within a running app)
* A powerful idea: update the HTML based on events, combine DOM + first class functions
* Example: Double Rainbow
* Your next lab
* Next time: even more powerful idea: update the HTML with data from a web server

# Tuesday, February 19th and Tuesday, February 26th: JSON, Asynchronous, XMLHttpRequest
* Last class: events, modifying HTML after it is loaded using JavaScript via DOM
  - Notice: web page does not reload
* We also saw the Twitter news feed and how content is retrieved from server(s) every so often
* Last class + this week: you will start to see _why_ first class functions and JavaScript objects are so important
* I really enjoy teaching this class online.  Notice the interactions that we have on Piazza......
* This week: asynchronous, limitations of JavaScript
* First things first: JSON --Data exchange format (think text file).  JSON is string, NOT JavaScript objects.
* Why JSON?

# Tuesday, February 26th: Asynchronous, XMLHttpRequest (continued)
* So far, you have only worked with synchronous communications. Problem: slow, linear, "locking", not smooth
* The bigger idea: asynchronous communications.  Where it is used: events, online education
* (Recall) example: Twitter timeline.  Take a look at number of requests made _after page is loaded_
* Another real example: email in the past vs Gmail
* Example: https://jsfiddle.net/mchow01/errdrx7r/
* The idea of XMLHttpRequest => make a request to a server-side script to get data, manage the response
* XHR key methods and attributes: `open()`, `send()`, `onreadystatechange`, `status`, `readyState`, `responseText`
* The data that now typically get back in the `responseText`: JSON
* Client-side JS is heavily event-based
* Finishing up on the XMLHttpRequest example:
  - Asynchronous
  - The event: onreadystatechange.  The readyState values:
    - 0 => The request is not initialized
    - 1 => The request has been set up
    - 2 => The request has been sent
    - 3 => The request is in process
    - 4 => The request is complete
* Parsing the JSON data

# Thursday, February 28th
* Meet teammates for semester group project
* Last class: XMLHttpRequest
* The idea of XMLHttpRequest => make a request to a server-side script to get data, manage the response
* XHR key methods and attributes: `open()`, `send()`, `onreadystatechange`, `status`, `readyState`, `responseText`
* Is checking for readyState 4 good enough?  NO!
* navigator.geolocation
* Are async and events (e.g., addEventListener, getCurrentPosition) the same? No. Are they related? Yes --almost all event handling functions are asynchronous.
  - Asynchronous: "where data can be transmitted intermittently rather than in a steady stream"; not going at the same rate
* Caveats with XMLHttpRequest and one of the limitations of client-side JavaScript
* Limitations of Client-Side JavaScript:
  - Client-side tasks (or what you can do with client-side JavaScript)
    - Dynamically modify browser content, e.g., with animation
    - Dynamically fetch new documents from servers
    - Allow new methods of user interaction other than links and buttons
    - Get information about a user's computer (navigator.userAgent)
  - Limitations of client-side scripts
    - Other people cannot access data or information that you have (i.e., you can't make responses)
    - Can't to write to files on disk
    - You are constrained by web browser (i.e., browser incompatibility issues)
    - Storage constraints (e.g., cookies, local storage)
    - Security issues (e.g., same origin policy)
    - View source
* Lab 6

# Tuesday, March 5th: jQuery
* Quiz 1
* What is a framework?
* jQuery examples
* What's the point of jQuery?
  - Write shorter code
  - Don't need to deal with brower incompatibility issues
* But why did we learn JS first?!?!?
  - Need basic vocabulary
  - How $() works => DOM
  - How $.ajax, $.get, $.post all work => XHR
* Midsemester course evaluation

# Thursday, March 7th: Persistence with Cookies and Local Storage
* How I designed Assignment 2
  - Your responsibility to deal with errors
  - Some flexibility
  - Some open-endedness, force you to ask questions
  - More than one acceptable way to solve the problem, deal with engineering tradeoffs
  - Opportunities for the future
* The picture: client-server  
* The point of lab 6...
* Today: storing data over time
* What can't we do, knowing the limitations of client-side JavaScript.
* What we have learned so far in this course: key-value pairs
* Two basic storage mechanisms on the client-side: cookies, local storage
* Cookies: 4 KB max, there is a max number of cookies per domain
* Local storage: about 5 MB per domain
* What are the limitations of client-side?
  1. Can't connect to a database server directly --and hence, store lots and lots of data
  2. Other people cannot access data or information that you have (i.e., you can't make responses)
  3. Can't to write to files on disk
  4. You are constrained by web browser (i.e., browser incompatibility issues)
  5. Storage constraints (e.g., cookies, local storage)
  6. Security issues (e.g., same origin policy)
  7. View source
* The finer point: both cookies are local storage are still bound by Same Origin Policy
* Examples

# Tuesday, March 12th and Thursday, March 14th: Server-Side and Web Applications
* How do you design the server-side environment, assuming that hardware (computer(s) for server(s)) is provided to you?
  1. Handle incoming request
  2. Be publicly known and available
  3. Store data
  4. Receive data
  5. Send / make response back to client
  6. Forward requests
  7. Send requests _to other servers_
  8. Protect data
  9. Handle a lot of requests
  10. Build HTML data on the fly
  11. Be available all the time (well, almost)
* Implementation 1 (ugly): Node.js => write server-side programs using JavaScript
* Implementation 2 (cleaner using Express framework)
* Assignment 3

# Tuesday, March 26th and Thursday, March 28th: MongoDB: Data Persistence with MongoDB, Connecting Node.js with MongoDB
* Using data sent via HTTP POST...
* ...or HTTP GET
* A fine point: data sent to a web server is always text!
* A simple and complex picture of client-server architecture: https://www.acunetix.com/websitesecurity/web-application-attack/
* So far, we have talked about the middle tier using Node.js and Express.js (framework on top of Node.js)
* Let's talk about storing data now, the database server layer
* Yes, we are dealing with another server (for solely storing data)
* Why aren't we using a relational database or SQL in this class? Complexity.  The big idea that you know already: key-value pairs
* MongoDB: we can store lots and lots of key-value pairs a la JSON
* Database: a bin of data
* Collection: lots and lots of data records
* Document: a single record of key-value pairs in JSON format
* All documents contain a field `_id`, generated for you
* Important: a document does not need to follow a certain structure
* Operations: inserting a document, querying a collection, updating a document
* Important: inserting a document into a database that does not exist WILL create the database!
* Wait, I'm confused: we are dealing with two different systems here. How do you have a Node.js server talk to a MongoDB server? The answer: a driver. A driver is a piece of software for accessing a database.  Think of this as a translation engine.  There is a `mongodb` driver for Node.js
* Example: https://github.com/tuftsdev/WebProgramming/tree/gh-pages/examples/nodejs/nodemongoapp.  Feel free to copy and use initialization code.  It will help you big time!

# Tuesday, April 2nd: Web Security, Part 1
* Revisiting `nodemongoapp`
* A trivial question: in the real world, people submit data via web form.  So...
* There's something wrong with it. What if...
* Cross-Site Scripting (XSS): what is it, why is it so bad, and where to attack?
* https://www.veracode.com/security/xss
* Video: https://www.youtube.com/watch?v=t161cahMAZc
* OWASP Top 10 list: https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf
* Defending against XSS (don't do this in Assignment 3)
* How bad is this problem? https://www.elie.net/static/files/lessons-learned-while-protecting-gmail/lessons-learned-while-protecting-gmail.pdf
* Bug bounties
* The moral of the story

# Thursday, April 4th: Web Security, Part 2
* https://www.csoonline.com/article/3269028/malware/what-is-cross-site-scripting-xss-low-hanging-fruit-for-both-attackers-and-defenders.html
* https://www.veracode.com/sites/default/files/Resources/Reports/state-of-software-security-focus-on-application-development.pdf
* Database injection attack in MongoDB