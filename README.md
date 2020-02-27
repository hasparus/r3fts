Wednesday, February 26, 2020\
[Wrocław TypeScript #12: Giving Back](https://www.meetup.com/WrocTypeScript/events/sjzhvqybcdbjc/)

## Fixing @types/react conflict in react-three-fiber

### Usage

```
yarn
yarn start
```

### Notes

**Title**: Case Study: Helping with TypeScript problems of `react-three-fiber`.

**Dan Questions**:

- How will you deliver the idea to the audience?
  - R3F is pretty rad. Gonna show [this](https://i2160.csb.app/) on the first slide.

    _Started with the tease, went ahead to explain the problem and continued with the solution.\
     Why -> What -> How. Got good feedback on the flow._

- What is the one thing that you want people to take away from your talk?
  - Compiler API is __powerful__. We can use this power to hard solve problems.

- Why are you giving the talk? What is the emotional core? What do you believe in?
  - Don’t be afraid. Contribute to open source. Hack weird stuff.

**Format**: Case Study.

**Outline**:

- what is React Three Fiber
- why I care about it
  - (past threejs experience in Explain Everything)
- how it works
  - what is a reconciler?
- reconciler problem -- conflict with @types/react [#233](https://github.com/react-spring/react-three-fiber/pull/233) \
  I generated components for dynamic behavior of r3f by mapping over THREE types, dumping them to a file with Compiler API.
  - why was it hard in TS
    - static clashes with dynamic
  - How React Native lies about its types
  - Why was traversing the API in JS harder (impossible?)
  - show the code

**Comments**:

I have actually removed 1/3 of the talk ([initial idea gist](https://gist.github.com/hasparus/bcd582d93d5892f54a18607fe54afb4b/edit)) on the same day I gave it.
It was a good idea. The talk took the time it was meant to.

I got some feedback and I think it resonated pretty well. However, after watching the video I'm a bit unhappy with the delivery. The deck could also be improved. I might polish it and try to fit more story and more knowledge in a bit longer time window. I think I'll leave rollup plugin story for another talk though, to keep this more focused on React and TS Compiler API.
