- Child to Parent communication ("Lifting State Up"):
- Parent defines function (App.js, NewExpense.js) and adds it as a prop to Child
- Child calls the parent prop.function and injects a value

Quiz:

1. How should you NOT listen to events when working with React?
   -> Adding an event listener (e.g via "addEventListener") manually
   "That's the correct choice because this is how you should NOT set up event listening. This would be imperative code, you're not using React's features with this code and you would trigger some function that lives outside of React components and hence wouldn't be able to interact with React component state."

- Setting an event handler function via props (e.g. onClick={}) [This is how you SHOULD do it]

Question 2:
Which value should you pass to event listener props like onClick?
-> A pointer at the function that should execute when the event occurs
"you want to pass a "pointer" at the to-be-executed function as a value to onClick etc. Then, this function gets executed "on your behalf" by React when the event occurs."

Question 3:
How can you communicate from one of your components to a parent (i.e. higher level) component?
-> You can accept a function via props and call it from inside the lower-level (child) component to then trigger some action in the parent component (which passed the function)
"In JavaScript, functions are just objects (i.e. regular values) and hence you can pass them as values via props to a component. If that component then calls that function, it executes - and that's how you can trigger a function defined in a parent component from inside a child component."

Question 4:
How can you change what a component displays on the screen?
-> Create some "state" value (via useState) which you can then change and output in JSX

Question 5:
Why do you need this extra "state" concept instead of regular JS variables which you change and use?
-> Because standard JS varuabkes don't cause React components to be re-evaluated

Question 6:
Which statement about useState is NOT correct?
-> Calling useState again will update the state value [it will simply create a new state]

Question 7:
How can you update component state (created via useState)?
-> You can call the state updating functon which useState also returned

Question 8:
How much state may you manage in one single component?
-> You can have as many as you want

Question 9:
What's wrong about this code snippet?

const [counter, setCounter] = useState(1);
...
setCounter(counter + 1);
-> If you update state that depends on the previous state, you should use the "function form" of the state updating function instead
