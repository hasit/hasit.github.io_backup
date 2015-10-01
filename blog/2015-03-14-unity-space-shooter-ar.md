---

layout: post title: Unity Space Shooter in Augmented Reality using Vuforia

published: true
---------------

Mobile Computing
----------------

I decided to take CSS 545 Mobile Computing class in the Winter Quarter of 2015. The main motivation behind this decision of mine was to expand my horizon and to try to work in a field of Computer Science that I haven't had a chance to explore. And to say the truth, this class did exactly the same. I was exposed to important mobile computing design concepts that I wouldn't have made an effort to read or implement in my own sweet time.

The class, taught by Prof. [Arjmund Samuel](http://research.microsoft.com/en-us/people/arjmands/default.aspx), required us to come up with ideas for applications for any mobile platform. After a few iterations and a presentation, we all settled to work on one idea with a partner. This idea was to be translated into implementation and presented by the end of the same quarter. The only constraint was to use mobile technologies. We were told to keep the following three things in mind while we embarked on our journey into the mobile world:

-	Mobility: Does the application use mobile device and sensors in any special way?
-	Novelty: Is the application a new idea, or a new twist to an existing idea?
-	Richness: Does the application show rich user interaction?

Ideation Phase
--------------

Computer Vision being my area of interest, camera was the first sensor I looked at. 'Camera... Some vision application? Augmented Reality maybe?', I thought to myself. After some brainstorming with my project parter, Jerry Chen, we came up with a very rough idea to implement the classic Arcade Space Shooter with a twist of Augmented Reality.

The next step was to look for mobile gaming platforms that supported Augment Reality libraries. After a bit of digging, we settled on using [Unity](http://unity3d.com) for it's multi platform support and the support for a very rich AR library called [Vuforia](https://www.qualcomm.com/products/vuforia).

We started by quickly drawing up some sketches for our User Study:

This image was to represent the degrees of movement we planned on providing using Accelerometer. ![Movements](http://hasit.github.io/assets/space_shooter/move.jpg)

This image was to represent the use of a marker to generate the augmented game world. ![Marker](http://hasit.github.io/assets/space_shooter/marker.jpg)

This image was to represent objects flying towards the user inside the augmented game world along with a HUD to display Score and Health. ![Objects](http://hasit.github.io/assets/space_shooter/objects.jpg)

We got mostly positive reviews from random people in the college. We made it a point to ask students as well as working professionals from disciplines outside of Computer Science. While most of them had very little idea about Augmented Reality, after explaining them in simple terms, they seemed excited. The joy and excitement about the idea on their faces only gave us more motivation to work towards making this into an actual application.

Development Phase
-----------------

After setting up Unity on our personal computers, we started looking for tutorials and examples. To our delight, we found a [Space Shooter tutorial](http://unity3d.com/learn/tutorials/projects/space-shooter/) on the Unity [Tutorials](http://unity3d.com/learn/tutorials/modules) page. This gave us a head-start and provided us with a good tool to learn and play around with the Unity Development Environment.

Another great tutorial we came across was in [this](http://www.dannygoodayle.com/2013/03/01/making-your-first-project-with-unity-and-augmented-reality/) blog post. The tutorial enabled us to quickly get started with the Augmented Reality development side by side. Below is a screenshot of the simplest of applications in Unity with Vuforia to scan a marker and generate a solid cylinder over it:

![AR](http://hasit.github.io/assets/space_shooter/ar.png)

With all the tools at hand, we started working on our game. We reused most of the assets and scripts from the Space Shooter Tutorial due to time constraints and also, why rewrite something that is already freely available? We then reached a point at which we could generate our spaceship in space (Wow!) and spawn objects (Astroids, Bombs, Health Packs and Shields) using an AR marker with cool star field effects (Wow again?). Tuning up the accelerometer performance for just enough sensitivity, we could control the spaceship to move in the X and Y planes using the phone accelerometer. In no time, we were commanding the spaceship, shooting at astroids and dodging bombs. Below is a video of the game in action:

<iframe width="560" height="315" src="https://www.youtube.com/embed/UwM6CJdMfYw" frameborder="0" allowfullscreen></iframe>

Wrapping Up
-----------

Overall, this was a fun project. It got me acquainted to mobile development concepts, Unity development environment and Vuforia library. We do not plan to distribute or make this game available on any application store since it is still in development phase and buggy at times but it can be downloaded and developed further from this Github repository:[AR Space Shooter](https://github.com/hasit/ARSpaceShooter). Be aware that it is huge in size since it hasn't been cleaned up.

I feel very positive about this project and I hope to hear more from other people about their views. Feel free to comment (opinions, questions) or contribute to the code.
