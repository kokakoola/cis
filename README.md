## The idea behind the scene

The task is difficult in the way that we are dealing with users who have never used or used little the computer. They are smart people, thing is that the countrys internet support is not very good, so computerskill is not a usual thing. At the same time they usually have smartphones, so they are used to the mobile interface.

The workflow is completed on the paper at the moment. Large files, bare minimum at the same time: they use to add stamps and signatures on the same paper what indicates the specific flow then.

The idea is to keep it as close to the paperflow as possible - to keep the learning curve minimal. RIKs analysts insisted to keep workong on the table format. I oppose it: in my opinion there are thing you can not convert directly from paper to computer without losing in performance. Inserting data into a table is one of them.

Instead I intend to use inputs as questionary. The inputs will look like fields on paper - bare underline. Very important is the organic animation of things, that form elements would respond to user and guide them through process. The process should feel like working on paper but have more guidance.

Luckily,  ideas are in the air, Google is building his Material design what almost completely refers to my ideas toward particular design task.

## Existing examples 
Locals are building a [wordpress-page for court](http://sulicourt.com/home-2/) what shall be linked or otherwise integrated with our system.

Dubai has a proffesional [e-court system](http://www.dubaicourts.gov.ae/portal/page?_pageid=292,433242&_dad=portal&_schema=PORTAL) -  we can learn some of that page.

## Workflow
As an international project with participans from different locations/companies (I can count 3 in Estonia and 2 in Kurdistan) it needs speciflicly good toolset for collaboration. TFS is good for some things, I would add [Asana](https://asana.com/) for tracking and [Slack](https://slack.com/) for communicationg and Usersnap[https://usersnap.com/] for onscreen commenting. For all listed tools the testaccounts are created (named Kurdi Kohus), depends on project manager wether they will be used or not.

Hanno has written about their tools for [collaboration](http://hanno.co/logbook/nine-tools-to-keep-our-remote-team-together), peek-in into their general workflow is [here](http://playbook.hanno.co/).
Read about [Slack and Asana](http://qcmny.com/tools-and-technology/3-collaboration-tools-cant-live-without/)

## Fonts and directions
We go with the bulletproofed [Google fonts](http://www.google.com/design/spec/style/typography.html#): Roboto (light, Normal, Medium e.g. 300, 400, 500) for english version, Noto for arabic and kurdish. Thats for the webpage. All the documents influenced by MS Word and possibly sent by email shall use unicode fonts.

Other suggestionst for [arabic webfonts](http://stackoverflow.com/questions/7185106/what-are-my-web-font-choices-for-arabic) by community, in Google fonts are arabic-persian fonts under [early access fonts](http://www.google.com/fonts/earlyaccess). Note that arabic and kurdish letters are not the same.

Pay attention that rtl-writing starts from end - in our understanding. They take the file and start to fill it from end. 

As we are going with SASS version, there is a helper for [rtl-support](http://www.matanich.com/2013/09/06/rtl-css-with-sass/)

## Colors
The color pallette should be nordic and unobtrusive - was the clients wish. The sample pallettes are in [Coolor account](http://coolors.co/092327-0b5351-00a9a5-b5c2b7-8c93a8).

## List of used plugins and methods

- frontpage and first user manual page scroll based on [pagePiling.js](https://github.com/alvarotrigo/pagePiling.js#pagepilingjs)
- bubbles for guide tips - [crumble](http://blog.tommoor.com/crumble/)
- general animation of elements on pagescroll - [wow.js](http://mynameismatthieu.com/WOW/). A decent [example](https://www.box.com/notes/) about it is Boxnotes.
- [HTML5 fullscreen API](http://davidwalsh.name/fullscreen) Explained in detail [here](http://www.hongkiat.com/blog/html5-fullscreen-api/)

## Maybe-plugins
- svg interaction to replace flash [snap.svg](http://snapsvg.io/)
- resource of [guide plugins](http://ninodezign.com/25-free-jquery-plugins-for-doing-guided-tours-through-a-website/)

## Framework and UI examples to use as base
- [Questionary](https://ethn.io/22910)
- inputs will look like [this](http://codepen.io/sevilayha/full/IdGKH/)
-  the style is used in [Paper Elements](http://www.polymer-project.org/components/paper-elements/demo.html#paper-shadow)
- Polymer tutorial by [Sitepoint](http://www.sitepoint.com/introduction-to-web-components-and-polymer-tutorial/)
-  sample admin themes to get started: [Bootbundle app](http://bootbundle.herokuapp.com/resources), [bootstraptor](http://demo.bootstraptor.com/bs_deal.html) (less-based) and [Detail Admin](http://wrapbootstrap.com/preview/WB07061TJ). And cool angular-template [Flafull](http://flatfull.com/themes/angulr/#/app/docs) - pay attention to ui-jq what allows you to call the jQuery function or plugin specified on the element.


## Usability testing
[This](http://ui-patterns.com/blog/complete-review-ux-usability-tools-website#ab_testing) article giver probably a pretty good overview of available tools. Session recording app for windows would be [Usability Studio](http://www.sketchman-studio.com/usability-studio/) - as local computers have built-in camera, the implementation would be easy.

