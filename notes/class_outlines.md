# Thursday, January 18th: Course Introduction
* The bad news: course is closed, wait-list
* Why (still) the web?  Why are you here?
* Motivation 1, the first web page (1992): http://info.cern.ch/hypertext/WWW/TheProject.html
* Motivation 1A: http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html
* Motivation 2: http://www.dolekemp96.org/
* How two computers talk to each other: basic networking
* The Internet vs the World Wide Web

# Tuesday, January 23rd: HTTP
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
* Demo: Web server
* Q: How to browse web without web browser?
  
# Thursday, January 25th: HTML
* Last class: recall how HTTP works
* Recall question: if no port number is provided, the default port number to connect to on web server is...?
* Recall question: what HTTP command is executed when entering URL address?
* Recall question: if no file is provided in URL, the file with what name is generally served by default?
* To ponder: the best status code to use...?
* Take a look at the HTML
* What is markup?
  - The paragraph analogy
* Motivation: writing
* Block vs. inline elements
* Attributes
* Image --a special tag...
* Anchors
* Absolute vs relative URLs
* What's wrong with the HTML?
* W3C validator

# Tuesday, January 30th: Revision Control with Git
* Last class: HTML => for the content, for document appearance and behavior, W3C validator
* Last class: Two major types of HTML body elements: block level and inline
* Recall question: difference between absolute and relative URLs --which to use for portability?
* Recall question: why is the `alt` attribute necessary for images?
* What I am NOT going to do: discuss every HTML tag
* What is important to discuss: the finer points of HTML
  - #fail
  - Recall last class: what's peculiar about HTML? (hints: closing tags, attributes, nesting)
  - Commandments
* Question: _how do you build a web browser?_
* What I've noticed in the past: many connecting to Tufts CS to do work via SSH, questions on submitting assignments and labs in this class, how to upload web pages to a server
* About file permissions and the HTTP response status code 403
* The nightmare scenario that illustrates the need for revision control: in the past...
* What if I need to hire developers to work on different pieces of a projet?
* Why revision control? Keep track of changes, document changes
* Why Git? Speed, no dependency of a remote server (unlike Subversion)
* Why GitHub for repositories? Network effect, communications
* Example with our course website
* IMPORTANT: you are not expected to master Git by the end of this course.  The reality, even for the most seasoned people: https://twitter.com/ErrataRob/status/707327952158121984

# Thursday, February 1st: Cascading Style Sheets (CSS)
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

# Tuesday, February 6th: Responsive Design
* Last class: CSS
* Why CSS?  What do they give you?
* Recall: id vs class
* Recall: what is cascading?
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

# Thursday, February 8th: JavaScript
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

# Tuesday, February 13th: Document Object Model (DOM)
* Last class: JavaScript data and data structures (lists and dictionaries)
* The big idea: using JavaScript to dynamically modify HTML content _after it is loaded_.  Yes, you can mix HTML and JavaScript
* Today: the "var" keyword, using JavaScript in an HTML page
* The document object: a JavaScript object that contains the entire structure of an HTML page after it is loaded, in tree-like format (thus, known as the Document Object Model tree).  Example of a DOM tree: https://developer.mozilla.org/en-US/docs/Using_the_W3C_DOM_Level_1_Core
* Example 1: Fiddle https://jsfiddle.net/mchow01/0wga8wLp/3/?utm_source=website&utm_medium=embed&utm_campaign=0wga8wLp
* Example 2: Highlighting paragraphs in an HTML document

# Thursday, February 15th: Functions in JavaScript
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

# Tuesday, February 20th and Tuesday, February 27th: Asynchronous, XMLHttpRequest, JSON
* Last class: events, modifying HTML after it is loaded using JavaScript via DOM
  - Notice: web page does not reload
* We also saw the Twitter news feed and how content is retrieved from server(s) every so often
* Last class + this week: you will start to see _why_ first class functions and JavaScript objects are so important
* I really enjoy teaching this class online.  Notice the interactions that we have on Piazza......
* This week: asynchronous, limitations of JavaScript
* First things first: JSON --Data exchange format (think text file).  JSON is string, NOT JavaScript objects.
* Why JSON?
* So far, you have only worked with synchronous communications. Problem: slow, linear, "locking", not smooth
* The bigger idea: asynchronous communications.  Where it is used: events
* (Recall) example: Twitter timeline.  Take a look at number of requests made _after page is loaded_
* Another real example: email in the past vs Gmail
* Are async and events the same? No. Are they related? Yes --almost all event handling functions are asynchronous.
  - Asynchronous: "where data can be transmitted intermittently rather than in a steady stream"; not going at the same rate
  - Are they the same? No. Are they related? Yes --almost all event handling functions are asynchronous.
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
* Is checking for readyState 4 good enough?  NO!

# Thursday, March 1st
* Examples of async APIs in JavaScript: `navigator.geolocation.getCurrentPosition()`, `XMLHttpRequest`
* Quiz 1
* Midsemester course evaluation

# Tuesday, March 6th: jQuery
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
* jQuery examples
* What's the point of jQuery?
  - Write shorter code
  - Don't need to deal with brower incompatibility issues
* But why did we learn JS first?!?!?
  - Need basic vocabulary
  - How $() works => DOM
  - How $.ajax, $.get, $.post all work => XHR

# Thursday, March 8th: Persistence with Cookies and Local Storage
* How I designed Assignment 2
  - Your responsibility to deal with errors
  - Some flexibility
  - Some open-endedness, force you to ask questions
  - More than one acceptable way to solve the problem, deal with engineering tradeoffs
  - Opportunities for the future
* The point of lab 6...
* Today: storing data over time
* What can't we do, knowing the limitations of client-side JavaScript.
* What we have learned so far in this course: key-value pairs
* Two basic storage mechanisms on the client-side: cookies, local storage
* Cookies: 4 KB max, there is a max number of cookies per domain
* Local storage: ~5 MB per domain
* The finer point: both cookies are local storage are still bound by Same Origin Policy
* Examples

# Tuesday, March 13th and Thursday, March 15th: Server-Side and Web Applications
* What are the limitations of client-side?
  1. Can't connect to a database server directly --and hence, store lots and lots of data
  2. Other people cannot access data or information that you have (i.e., you can't make responses)
  3. Can't to write to files on disk
  4. You are constrained by web browser (i.e., browser incompatibility issues)
  5. Storage constraints (e.g., cookies, local storage)
  6. Security issues (e.g., same origin policy)
  7. View source
* The picture: client-server
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
  
# Tuesday, March 27th: Server-Side (continued), Frameworks
* Last class: the server side, Node.js, Express
* Option A: https://github.com/tuftsdev/WebProgramming/blob/gh-pages/examples/nodejs/server.js
* Option B: https://github.com/tuftsdev/WebProgramming/blob/gh-pages/examples/nodejs/simpleexpress/app.js
* General form of a method in Express.js
* The `express`, `request`, and `response` objects
* The `package.json` and `Procfile`
* A good framework:
  1. Don't reinvent the wheel
  2. Most of the important ideas are already built for you
  3. Shorten code
  4. Add-on modules that you need.  For all web applications developed using Express.js, a file `package.json` is required.  The file is a list of requirements / dependencies for the web application.  Think of this as the ingredients for a recipe.  Then install all the requirements / dependencies via `npm install`
* Heroku and pushing your application to Heroku
* Assignment 3

# Thursday, March 29th: MongoDB: Data Persistence with MongoDB, Connecting Node.js with MongoDB
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

# Thursday, April 5th: Web Security, Part 1
* To understand Assignment 3, draw it out
* The "trivial" questions --or so you thought...
* Finer point: data sent to a web server is always text!
* Revisiting `nodemongoapp`
* There's something wrong with it. What if...
* Cross-Site Scripting (XSS): what is it, why is it so bad, and where to attack?
* https://www.veracode.com/security/xss

# Tuesday, April 10th and Thursday, April 12th: Web Security, Part 2 and Closing the Course
* Last class: cross-site scripting (XSS) and web security 101
* Awareness:
  1. OWASP Top 10 list: https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf
  2. CWE/SANS TOP 25 Most Dangerous Software Errors: https://www.sans.org/top25-software-errors/
* Defending against XSS (don't do this in Assignment 3)
* How bad is this problem? https://www.elie.net/static/files/lessons-learned-while-protecting-gmail/lessons-learned-while-protecting-gmail.pdf
* Playground: http://www.cs.tufts.edu/comp/20/hackme.php
* Bypassing client-side validation using a proxy
* Case study: "How to buy a 65” Plasma for $.99" http://www.edgeblog.net/2006/how-to-buy-a-plasma-for-99/
* The moral of the story...
* Assignment 4
* Hard-coded credentials: https://cwe.mitre.org/data/definitions/259.html

* Database injection attack in MongoDB
* What happened during spring break nearly two years ago:
* "I’ve Just Liberated My Modules" https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c#.aandh88ud. Discussion on Hacker News: https://news.ycombinator.com/item?id=11340510
* "NPM & left-pad: Have We Forgotten How To Program?" http://www.haneycodes.net/npm-left-pad-have-we-forgotten-how-to-program/. Discussion on Hacker News: https://news.ycombinator.com/item?id=11348798
* Closing the course
* No slides necessary for a lightning talk
* Some reads on how to give a good lightning talk:
  - http://www.perl.com/pub/2004/07/30/lightningtalk.html
  - https://blog.hootsuite.com/lightning-talks-bring-your-organization-closer-together-in-5-minutes/
  - http://www.unicef.org/knowledge-exchange/files/Lightning_Talks_production.pdf
* ![How the web works](https://ruslanspivak.com/lsbaws-part1/LSBAWS_HTTP_request_response.png)
* For the next few class days, answer: "what's the point?"
* What's the point --of web security?
  - Let this sink in: "69 percent of web applications are plagued by vulnerabilities that could lead to sensitive data exposure, and 55 percent by cross-site request forgery flaws; 25% of web apps still vulnerable to eight of the OWASP Top Ten" (circa 2017: https://www.helpnetsecurity.com/2017/02/14/web-application-vulnerabilities/)
  - https://www.veracode.com/sites/default/files/Resources/Reports/state-of-software-security-volume-7-veracode-report.pdf
  - The Cyber Security Education problem
  - "our CEO Tony’s greatest dissatisfaction many engineering new grads, as is not just the lack of preparation, but the seeming disinterest to chase down that very understanding."
* What's the point --of everything? https://github.com/alex/what-happens-when

* Semester Group Project: For each semester group project team on Tuesday, prepare a short technical lightning talk (3 - 5 minutes) to the class on something that your team has learned in the semester group project.  This could be anything: the Facebook API, MySQL, Angular, etc.  The points of a lighting talk:
  1. To demonstrate growth and application of material
  2. To teach something new to the class.  We can't teach everything in this course.
  3. To share ideas

# Tuesday, April 17th
* What's the point of semester group project?
  - Applying what you have learned
  - Scope down
  - Dealing with adversity
  - Show the rejection letter
* One last lab...

# Tuesday and Thursday, April 24th and 26th
* You've barely scratched the surface
  - What reality is really like
  - What engineering issues do you see here?
  - Want to learn and build something over the break?  Write a car service MOBILE app (iOS or Android)
* The big ideas from this class:
  - key-value pairs
  - Separation of concerns (CSS, server architecture)
  - Don't reinvent the wheel
  - Client-server, basics of distributed systems
  - Never trust user input
  - Events and asynchronous
  - Revision control
  - Attention to details
  - Learning how to learn
  - Communications
* Where do you go from here?
  - Web infrastructure and standards => COMP 150-IDS Internet-Scale Distributed Systems (Noah's course)
  - Objects, first-class functions, closures => COMP 105: Programming Languages
  - Internet and networking => COMP 112: Networking
  - The engineering side of the web => COMP 120: Web Engineering
  - NoSQL (e.g., MongoDB) vs. SQL databases => COMP 115: Databases
  - Security => COMP 116: Security
  - Programming skills and low-level => COMP 40, COMP 140 (Mark Hempstead)
  - Concurrent uses and how to write a chat or web server => COMP 50: Concurrency
  - User interface(s) => COMP 171
  - Mobile => various
  - Entrepreneurship.  COMP 20 will be part of ELS.
  - Further application of this course => Wearables (COMP 50)
    - See how Chris Gregg, Kate Wasynczuk, and Raewyn Duvall designed the course: https://docs.google.com/presentation/d/14vuu3Jc54vGYdguF4wE4pChx6nB87dZEOVXxRjd38Mg/edit?usp=sharing
* What's the point....
  - Of looking things up via Google, Stack Overflow => **take responsibility of your own learning, develop intellectual curiosity.  If you can't do these things, then perhaps CS is not for you as they are basic skills necessary for higher level courses (e.g., COMP 105, see http://www.cs.tufts.edu/comp/105/notes.html# Toc15)**
    - This is big question in scholarship and grad school applications
  - Of ask questions, asking for help => **ditto and _"knowing how to ask for help is the key to survival"_ --Alva Couch**
  - Of me providing you readings that may go over your head => **get out of your comfort zone**
  - Of using revision control: http://www.cs.tufts.edu/~nr/students/scm.html
  - Of using Heroku => **develop good habits, use real tools and systems. Many friends and colleagues have lament Comp Sci grads are not prepared to build with today's evolving platforms.**
  - Of making you write READMEs for every lab and assignment, Assignment 4 => **writing skills; articulate what you've learned**
* The real messages of this class
  - What you COULD do
  - Build your intellectual curiosity
  - Engineering and code are not everything
  - Learn how to learn
  - Get out of your comfort zone
* Of using GitHub: your portfolio, my gift to you
  - https://github.com/blog/2343-why-version-control-is-required-for-comp-20-at-tufts-university
* Personal thoughts
* Now: you can serve your work via GitHub and the `gh-pages` branch.
* Acknowledgements