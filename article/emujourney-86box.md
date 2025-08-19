---
title: "my emulation journey: 86Box"
date: 2025-08-19
tag: emulation, blog
---
[86Box](https://86box.net) is an emulator software of vintage IBM PCs. For the last few years I've been using it, replacing [DOSBox](https://dosbox.com) and its derivatives (such as [DOSBox-X](https://dosbox-x.com)) because of it being a full-fledged PC emulator, instead of hardcoding MS-DOS into your PC, which sounds somewhat boring. Yet DOSBox is perhaps an easier choice for novices.

![*a screenshot of the vm running windows 2000.*](https://raw.githubusercontent.com/barnacl437/Barnacl437/23803a3a252c07995ee4f5a0863f23bbbb9ab6f4/misc/pic-hoster/blog/Screenshot_2025-08-19_10-54-46.png)



For a lot of time, I've had tons of free time tinkering around with it. I would have had several config files for each machine running different OSes by using a VM manager of choice (for managing multiple configurations and instances), during the time I used Windows on my main machine, but now on a Linux machine and I tend to be lazy on finding a good alternative choice that would run on Linux, I just run 86Box with a single configuration file.

What I do? Well, I just go around with installing and seeing stuff work. These days I don't do anything much, but back in like months or even years, I tried installing a range of stuff.

![](https://raw.githubusercontent.com/barnacl437/Barnacl437/139ca160b82e31fc05d2692c9d8d3ebe4b93a961/misc/pic-hoster/blog/Monitor_1_20250220-231906-183.png)

[*DOSBox. Again. I was running it when it had several graphics glitches.*]


One thing you may know, or have been known on the way: 86Box is a low-level emulator with a concentration on accuracy; most execution logic is processed within just a single host CPU core. So the better the IPC (instruction-per-core) of your CPU, the better the emulation speed, and also you can ride it up further (i.e. choose an emulated CPU with higher clock speed, such as Pentium II 233).

I have an i5-7300HQ, and I would tend to stick around the Covington Celeron 66MHz for sure. Notwithstanding, it would still experience slowdowns most of the time, especially when the guest CPU is busy processing some works such as opening an application or clicking a link in browser.

![](https://raw.githubusercontent.com/barnacl437/Barnacl437/0418b3357286ca09c688adf14e481ff4e6b6a474/misc/pic-hoster/blog/Monitor_1_20250220-232837-065.png)

[*A Need For Speed II SE gameplay on there.*]

With a slight taste in gaming, given my host specs, 3D games are destined to run at just about cinematic frame rate and glorious VGA resolution (if you don't understand what these mean, it was 640x480 at about 15-20fps, iirc). Though it still ran, which is interesting. However, I don't consider this an ideal performance for retro gaming. Honestly, DOSBox might be a bright star for this.

![](https://raw.githubusercontent.com/barnacl437/Barnacl437/b162e19630722357337beaef80c7ddee0d25ebab/misc/pic-hoster/blog/Monitor_1_20250819-114121-118.png)

Beyond all that, just using it to browse the old net is somewhat a genuine vibe. In the above picture is me digging a 3D Realm's ftp server.

![](https://github.com/barnacl437/Barnacl437/blob/main/misc/pic-hoster/blog/Screenshot_2025-08-19_18-05-04.png?raw=true)

This is my current machine setup. Windows 2000 would perform okay under the Covington Celeron. Well, it also sits in about the minimum CPU requirement for Windows XP. Windows XP in fact, does run at this clock. Just that you can't do things as fast as ones with higher clock speed do.

So that's something to tell about 86Box, in my perspective. I can append or update this article later with new things that I've not taken the chance to write at the moment. 