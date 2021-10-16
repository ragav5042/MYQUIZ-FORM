class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder", "Enter your name");;
   //Create a input box to enter the number
   this.input=createInput("").attribute("placeholder", "Enter your answer");
   

    this.button = createButton('submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.greeting=createElement("h2")
this.question=createElement("h3")
this.options=createElement("h3")

    //this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
this.input.position(400,230)
this.greeting.position(400,300)
this.question.html("1) India is a")
this.question.position(150,100)
this.options.html("a) Country  b)State c)District d)Union territory")
this.options.position(175,150)

    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.button.hide()
      this.input.hide()
      this.input1.hide()
      var massage=`
    Hello ${this.input1.value()}
    </br>Your Response has been submitted`;
    this.greeting.html(massage);
    
    })


  }
}
