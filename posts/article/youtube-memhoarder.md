---
title: YouTube is a memory hoarder for me right now...
date: 2025-09-20
tag: blog, tech, memory hoarder, memory leak, memleak (perhaps?)
---


This has been a real issue on my side for several months. Perhaps much longer than that but I only started complaining about it in a recent time. 
YouTube, for some reason, becomes *really* hungry in term of memory usage when I watch videos on Firefox. This is the worst my machine can ever reach:

![](/assets/pics/firefox-youtube-4gb-mem-usage.png)

Yes. *That* amount of memory. Even games like Half-Life 2 with a shitload of mods running on Linux wouldn't even ask for that much. 
Though usally it would use about 2GB of memory. Yet still, I was like, "dang it that bloody hell, is it trying to compete with how Yandere Simulator was *badly* optimised???"

I've heard and tested myself, YouTube doesn't seem to behave like that on Chrome (or Chromium-based browsers). Perhaps it's only trying it's best to simulate Cyberpunk 2077 v1.0 on platforms Google don't bother giving a shit into making them good.

But... sometimes Google isn't the actor of everything behind. Firefox is said to also have memory leaking problems. There are a lot of users across forums complaining about it (see this [Reddit thread](https://www.reddit.com/r/firefox/comments/1ghl7ik/does_firefox_currently_have_a_memory_leak_problem/)). 

Talking the said Reddit thread, I found a comment that explained something:

> Don’t ask me for a source, but I believe a factor could be that YouTube kills your system when uBlock is detected. It can’t show the ads, but it can make YouTube use like all your motherfucking RAM. 
>
> **Prestigious_Cherry_4** ([Comment on Sat, 2 Nov 2024](https://www.reddit.com/r/firefox/comments/1ghl7ik/comment/luzoody/))

I myself also did a test by disabling uBlock and see. It actually did reduce a bit, however I am enabling it back in and browse for a while, it's keeping around 350MB. Perhaps there is actually an issue, but in another aspect to say. 

After that 4GB surge, I had to temporarily migrate to a Chrome-based browser ([BrowserOS](https://www.browseros.com/)) in order to watch YouTube (I actually felt safer there with an average RAM usage of 300MB). Now I just went back to Firefox and it appears that it just went back to its "ordinary" state.

![](/assets/pics/Screenshot%20from%202025-09-20%2022-00-18.png)
*yes, now with two of them.*

So probably YouTube will not hoard my poor laptop's resource for now. Still, I will have to constantly monitor its memory use for a while when possible to see that what is really causing it to consume way too many RAM.