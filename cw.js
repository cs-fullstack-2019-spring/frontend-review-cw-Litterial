var clickbuttons = document.getElementById('notag');  /*gets id I listed for clickbuttons*/
var Thisis_the_Q_problem="";   /*used for user input*/
count=0;   /*counter*/

clickbuttons.addEventListener('click',function()
{


    while(Thisis_the_Q_problem!='n')  /*while condition is true*/
    {
        Thisis_the_Q_problem = prompt("Please enter 'Q'... I mean 'n' to exit otherwise I will keep asking.");   /*will ask user to enter 'n' unless they enter it*/
        if (Thisis_the_Q_problem.toLowerCase() == 'q')  /*easter egg if they enter q*/
        alert("LOL Nice try")
        count++;  /*increments the count*/
    }
    console.log("Amount of times you did not enter 'n': " +(count-1));   /*takes 1 away from the count because it also
                                                                            increments when n is entered*/


});

