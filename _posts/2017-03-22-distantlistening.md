---
layout: post
#
# Content
#
subheadline: "Network motivations"
title: "An interdisciplinary algorithmic listening"
teaser: "Toward a well-rounded design of future hybrid ears"
categories:
  - Discussions
tags:
  - info
author: alice_eldridge
date: 2017-03-27
#
# Styling
#
header: no
image:
    title: mattellBarbie.jpg
    thumb: mattellBarbie.jpg
    homepage: mattellBarbie.jpg
mediaplayer: true
---

This blog is intended as a scratch pad for discussions. In these opening posts Co-I Dr Paul Stapleton and I will share our motivations for instigating this network;  network participants are also warmly invited to share relevant research or reflections, so please be warned that we may approach you for a contribution, and feel free to offer some words if there is a pertinent topic you would like to think through.

There is a broad mix of disciplines represented, and it may be that any two participants have very little in common. This is  intentional. The network was motivated, in part, from recent personal experiences of working across research communities -- computer science, interactive music, soundscape ecology and most recently digital humanities and media studies. I have been struck -- both confused and inspired -- by the differences in attitudes, concerns, approach and ambitions of different disciplines with respect to the use of technology in general, and machine listening in particular, in research and practice. In this first post I will outline some of the personal motivations for the network, and point to some of the ways it might be fruitful to 'humanise' algorithmic listening.


### Exosomatic listening organs: The promise of new sonic prostheses
<p></p>
For celebrants of new technology, machine listening is as a key enabler holding promise of unlocking new ways to understand and interact with the world.  Decades of work in speech processing and music information retrieval have produced machine listening algorithms capable of accurately recognising aspects of human speech, or music such as genre, instrument melodic or rhythmic features. Current research is exploring other ways that machine listening could open up new ways of understanding and engaging with our lived environments across many other domains in research and industry: From [digital humanities](https://blogs.ischool.utexas.edu/hipstas/) to [conservation biology](https://rfcx.org/), [industrial monitoring](https://techcrunch.com/2017/01/29/the-sound-of-impending-failure/) to [audio archive management](http://gow.epsrc.ac.uk/NGBOViewGrant.aspx?GrantRef=EP/N014111/1) we are learning to listen with algorithms.

![rfcx](https://c1.staticflickr.com/3/2895/14151071006_d2379544ec_b.jpg) *[Rain Forest Connections'](https://rfcx.org/) upcycled mobile phones use automatic chain saw detection algorithms and text messaging to alert forest wardens of illegal logging in protected tropical forests*

---

With ecologist and engineering colleagues I am working on the development of acoustic indices as a tool for rapid biodiversity assessment, and the development of low power hardware meshworks to create acoustic biodiversity monitoring systems. This work is driven by an urgent, global need for efficient and effective ways to monitor the planet's critically endangered species, and to understand and evidence the [impact of extractive industries](http://www.bbc.co.uk/programmes/b08ffv88) on the fast disappearing pristine rainforests.  In the race to develop new acoustic indices, fundamental oversights are being made regarding basic properties of digital audio recording which seriously compromise the effectiveness of this potentially transformative tool. As well as the need for more technical research, ethical considerations around the use of pervasive acoustic monitoring in the wild are yet to make it onto the agenda.

+ *Humanising Algorithmic Listening* might mean exploiting (rather than overlooking) the fundamental differences between machine and human listening in order to design meaningful high level algorithms in new application domains.

+ *Humanising Algorithmic Listening* might mean considering the rights of humans even where the wellbeing of other species is the primary concern.

A similar enthusiasm for computational methods to afford ['distant listening'](https://blogs.ischool.utexas.edu/hipstas/) or 'close listening'  exists in the Digital Humanities community.  The fundamentally aural nature of poetry and oral history have traditionally been overlooked in humanities research, where textual sources are most common. Interviews are transcribed;  the semantics of the written word is studied but the expression, intonation and rhythm voice is seldom preserved. Just as musically-meaningful features have been built from low level audio features for application in Music Information Retrieval, there is a huge potential for humanities researchers to engage with large oral and sonic archives in new ways with algorithmic methods. Responses to an exploratory workshop in the application of machine listening in Oral History that we ran at [DH2016](http://dh2016.adho.org/abstracts/10) and for  [arts and humanities doctoral students](http://www.techne.ac.uk/for-students/techne-events/apr-2015/data-mining-the-audio-of-oral-history-a-workshop-in-music-information-retrieval) suggest this is a rich future research direction.

+ *Humanising Algorithmic Listening* might mean designing new audio features and machine listening methods for use in humanities research.




### Pervasive listening machines: Anxiety over always on devices  
<p></p>

Enthusiasm over new applications of machine listening in research is balanced by social anxiety over their increasing incorporation into  everyday consumer devices. [Amazon's Echo](https://www.amazon.com/dp/B00X4WHP5E), [Google's Home](https://madeby.google.com/intl/en_uk/home/), [Apple's, Siri](http://www.apple.com/uk/ios/siri/), [Microsoft's Cortana](https://support.microsoft.com/en-gb/help/17214/windows-10-what-is), and [Matell's Hello Barbie](http://hellobarbiefaq.mattel.com) are all part of an emerging range of voice-activated products that record audio and conversations from phones, wearables, and in-home agents. [Recent controversy](https://www.engadget.com/2016/12/27/amazon-echo-audio-data-murder-case/) over access to the recording archive of an Amazon ECHO in a US murder trial raises questions around privacy and the Internet of Things in general, but these 'always-on' listening devices are seen to be particularly problematic: They are *pervasive*, appearing in all aspects of our lives, and able to listen in all directions; they are *persistent*, with no current legislation over how long records are stored for; and they *process* the data they collect, seeking to understand what people are saying and *acting* on what they are able to understand.

This insidious surveillance contributes to widespread social anxieties around automation as it impacts both labour and recreational activities. This [automation anxiety](http://blogs.sussex.ac.uk/automationanxiety/) is a primary research topic for colleagues in [our lab](http://www.sussex.ac.uk/shl/), where doctoral students are also [questioning the ethical implications of these always-on listening devices](https://hauntedrandomforest.tumblr.com/wesley) in every-day consumer products through practice based research.

+ *Humanising Algorithmic Listening* might mean developing new ethical frameworks to keep corporate and commercial applications of machine listening in check.


![HelloBarbie](http://hellobarbiefaq.mattel.com/wp-content/uploads/2015/08/infographic.jpg) *Mattell's controversial [Hello Barbie](http://hellobarbiefaq.mattel.com/) features speech recognition and progressive learning features to create "the first fashion doll that can have two-way conversation with girls". The girls' conversations are stored on a remote server. It is not clear if it will also talk with boys.*

---
### Unpacking black boxes through listening
<p></p>
Part of this social anxiety stems from the unknown. There is no equivalent of an ingredients list for these algorithmically-enhanced consumer devices; commercial companies are not required to disclose their algorithms. From a public perspective, these are black boxes, the details of their operation is a Great Unknown. In some cases, the workings of bleeding edge machine listening and learning algorithms are equally evasive to the software developers that created them. For example, in the case of multi-layered neural networks used in Deep Learning, the maths is well understood, but in many cases we don't know why a particular model is successful and we can't predict it's response to a particular input without actually trying it.

The extraordinary minds at [Deep Mind](https://deepmind.com/) are no doubt developing analytical understandings and make a concerted effort to [communicate the science of deep learning](https://deepmind.com/blog/distill-communicating-science-machine-learning/). In a poetic turn, others are attempting to deepen our understanding of how deep learning for machine listening operates by [listening to the learned features](https://keunwoochoi.wordpress.com/2015/12/09/ismir-2015-lbd-auralisation-of-deep-convolutional-neural-networks-listening-to-learned-features-auralization/) in a convolution neural network (check out [Susurrant](http://susurrant.org/) too). Through sonification, rather than formal analysis, we can gain an intuitive understanding of how each layer functions, in sonic terms.  In a later blog post, network member David Kant will introduce his [Happy Valley Band](https://www.thewire.co.uk/in-writing/interviews/listen-to-the-happy-valley-band-s-new-album-and-read-an-interview-with-its-founder) project which unpacks source separation and other machine listening algorithms by deconstructing the Great American Song Book and performing human recompositions of machine decompositions live.

+ *Humanising Algorithmic Listening* might mean enriching both our formal and intuitive understandings of how extant and emerging machine listening algorithms work in sonic terms.

### Understanding human-machine agency in interactive performance
<p></p>
The value of practice-based, creative methods in enriching our understanding of technological mediation is common to many network members. Indeed, machine listening has been extensively explored and developed in interactive music systems for decades. By imbuing computers with even simple pitch and amplitude tracking abilities we can build software instruments which we can interact with in fundamentally different ways from traditional acoustic, electronic, or even manually controlled digital instruments. This was my first introduction to machine listening. As a cello-playing PhD student I was interested in how to build software performance systems which could convincingly improvise with a human instrumentalist, the litmus test being the ability to make convincing musical responses and more ambitiously, suggestions. *Performing* with, rather than analysing or even desk-working with software systems we gain a different, experiential understanding of machine listening, and its role in melding human-machine agencies. This will the main focus for workshop 2 and the topic of a future blog post by Paul Stapleton.

+ *Humanising Algorithmic Listening* might mean experientially probing human-machine agency through speculative, experimental and performative investigations.

## Algorithmic listening: Utopia, dystopia or inevitable?
<p></p>
The range of concerns and ambitions present today, resonate with positions held throughout the history of Philosophy of Technology: from the utopian views of technology post-enlightenment, through twentieth century dystopian warnings to limit the rush of technological invention (Habermas, Hans Jonas etc.) to contemporary views that we are natural born cyborgs and inevitably intertwined with technologies of all kinds (Clarke, Latour, Haraway etc.).   

## Toward a well-rounded design for future hybrid ears
<p></p>

The aim of this network is not to reconcile these different perspectives, but to curate conversations across contemporary research communities in order that technical advances, practical ambition and creative investigation mutually inform and are nourished by critical, philosophical perspectives into how technology mediates our existence. The integration of technical, philosophical, creative and practical perspectives may be messy at first, but is ultimately necessary in order to design and manage the applications of effective, ethical and meaningful listening algorithms for the future.


Follow us on [twitter](http://twitter.com/algolistening) to get future blog posts
<p></p>

<!-- >

\
: if commercial companies are acting on algorithmic advice and the consumer contests the appropriateness, who is to blame? The consumer for confusing the algorithm with ambiguous input? The company for acting on algorithmic advice? When the algorithm is opaque, it is hard to


    Plumbley
        link: http://gow.epsrc.ac.uk/NGBOViewGrant.aspx?GrantRef=EP/G007144/1
    Commercial applications of home monitoring
        link: http://www.audioanalytic.com/
    recent talk recently tweeted

* Data mining oral history
Poetry and oral history
Advances in speech recognition and music information retrieval demonstrate

* Computational indices in soundscape ecology.

https://pricelab.sas.upenn.edu/projects/machine-aided-close-listening-and-performed-poem
https://blogs.ischool.utexas.edu/hipstas/
http://dh2016.adho.org/abstracts/10


* Managing vast audio archives
[making sense of sound](http://gow.epsrc.ac.uk/NGBOViewGrant.aspx?GrantRef=EP/N014111/1)

<-->
