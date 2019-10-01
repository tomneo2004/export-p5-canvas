Demo
==============
As Visual-Music project required a solution to record p5js canvas's drawing and export it, this is just a research on how to achieve it.

This demo is going to demonstrate recording p5js canvas's drawing and export recorded file as webm. Canvas's recorder is using <a href="https://www.npmjs.com/package/recordrtc">RecordRTC</a> as recording library.

So far it can record p5js canvas's drawing and export it as a video file which is in webm format.

Installation
===============
Once inside visual-music-p5-react-wrapper folder, run npm install first to install dependencies, then npm start to start the application

Useage
===============
Pick a song file and play it. Once song is finished playback, browser will prompt a window to ask user to save recorded video file.

Recorder will paused while plaback is paused.

P5 Intergration with React for Visual Music
===============

<a href="https://github.com/and-who/react-p5-wrapper">react-p5-wrapper</a> was used to draw the visualization in P5 while the sound controls were implemented in react. The states were then passed down as props to the canvas to trigger a redraw and change the visualization based on the sound's amplitued.

The sketch file was passed down as props in the P5Wrapper to load the P5 functions.
In the sketch.js, the p5.sound and p5.dom addons needed to be imported manually since the wrapper doesn't recognize some of the functions when imported alone.

<strong>myCustomRedrawAccordingToNewPropsHandler</strong> function with the props as parameter was then implemented to monitor if any state changes like loading a song, clicking the play/pause button, using the volume slider was performed to redraw the canvas with the new values.
