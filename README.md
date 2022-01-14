
# KoxJa

**Overview:**
A portfolio site for a tattoo studio. Designed in Figma, created using React. A quick front-end project largely focused on the design aspect and practicing following a mockup.

#

**Technologies Used:**

 - HTML5
 - CSS 
 - SCSS
 - React JS
 - JavaScript
 - Yarn
 - Git
 - Github

**Technologies used for the design:**

- Figma
 - Google Fonts 
 - Procreate
 - Lightroom



## Design

I first worked on the design in Figma. Here I designed both the desktop and mobile versions of what I wanted the site to look back, checking in with the client if everything was ok. They allowed me complete creative control as they have quite strong branding allowing me an easy to follow guideline for the mockups to be designed. 

***NB** The colours of the website are different to some of the colours used in Figma as I hadn't been sent the hex codes when I began the designs. As it's just me working on this and the client knew I would design them with a different colour there was no need to change the Figma files as it would have been an unnecessary use of time.* 

**Desktop Design:** 

<img width="751" alt="Screenshot 2022-01-14 at 12 50 18" src="https://user-images.githubusercontent.com/81028718/149518026-8966d162-e75f-4d33-9a0e-7106b8bea462.png">


**Mobile Design:** 

<img width="725" alt="Screenshot 2022-01-14 at 12 51 25" src="https://user-images.githubusercontent.com/81028718/149518144-93c94dfa-8d52-4e9c-8186-8f4227186aea.png">


## Plan

Next I planned out how I wanted to code the website. I knew I wanted to keep it front end to avoid it being unnecessarily complicated considering the applications simple nature, however I still wanted to try and keep the code concise and not hard code too much. I decided I would make use of objects, arrays and props in order to store the information that I would display for the artists, their bios, and their gallery images. 

I also wanted to practice using SCSS. So planned what I would store as variables and sketched out ideas for using mixins and functions. I also needed to implement to use of @use and @forward as I had only used @import in previous projects and I've come to learn that @import is slowly being phased out. 


## Process

I started by creating all the components I would need to begin with (each individual page, and then deconstructed it a little bit in terms of each artist and the separate Navbar that appears when you are on the About page. I inserted dummy text so I could work on it whilst waiting for the official copy from the tattoo artists. 

I wanted to keep the JSX as clean as possible and as I don't have any backend set up for this project (as it wasn't really necessary for the nature of the site) I created objects to access within the JSX for the data that needed to be displayed (ie. The about page information). I also stored the gallery images in an array to access them using the map method. 


### Styles

I began the styling by setting up all the SCSS files I'd want. I utilised @use and @forward instead of @import for this project. I set up SCSS files that contained variables for the generic styling such as font-family and the colour scheme. 

I set up a mixin file that includes the styling of the Navbar as I wanted to use the same styling for an additional nav (that only appears on the About page) and for the footer. 

    @mixin  navBasic($color, $height) {
	    background-color: $color;    
	    height: $height;    
	    display: flex;    
	    justify-content: center;    
	    align-items: center;    
	    width: 100%;    
	    font-size: 18px;    
	    text-transform: uppercase;    
	    list-style-type: none;    
		    a {    
			    text-decoration: none;    
			    margin: 0px  28px;    
		    }    
    }

I styled this project mobile first. Once the mobile styling was complete I nested media queries into the SCSS for tablet screens and one more for laptop screens. 

## Notes

This was a really enjoyable, simple front-end project. It was fun to design a basic portfolio for artists working with their branding. If I were to further the project I would build a simple backend and create an API for the artists content and artist profiles. This would make it easier to add guest artists or artist changes, as well as ease the process of adding content. It could also be good to have a login for the artists and create an interface to allow them to do this themselves without the help of a developer.
