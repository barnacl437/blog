---
title: De-Steaming SteamOS 2.0 (Brewmaster)\under construction
date: 
tags: steam, valve, debian, jessie, analysis, de-steam
---

> post idea draft (clean it after posting lmao pls)

> architecture yappers (explain how things dont work properly anymore), installation step (just choose auto install), de-steaming procedure, desktop showcase, final words.
---

Now. Valve is making people hyped on their upcoming Steam Machine (second-gen) and a new VR headset called Frame, after their sucessful Steam Deck.

But what most people weren't aware of: they're all powered by SteamOS 3.0, which is Arch-based. There were older SteamOS versions, SteamOS Alchemist and Brewmaster (1.0/2.0), which by now has been largely out of favour. They are vastly different from the new, current SteamOS version, being based on Debian Jessie (Debian 8), which has LTS support ended in 2020.

I wouldn't have time to go deep into this, but old releases of SteamOS was meant to be installed on the first-generation Steam Machines, made by OEMs like Asus or Gigabyte, and Valve licensed the OS to them. It wasn't a success for Valve, and they seemed to learn from their lessons.


So now, I decided to take it apart. Or... more like trying to convert it into a familiar Gnome desktop which is behind all things about what you see in the big picture mode. Right now I have Brewmaster installed so let's get started.

*Oh, and before going in... yeah I have Google Gemini assisted in doing this work. But I tried to not __blindly copying__ a single word made by AI. I am trying to paraphrase its explanation only. I'm still learning about how stuff works everyday, and doing that with a responsible usage of AI.*

## the thing behind your console-ish 10 foot gui

At the very basic. The big picture isn't just a shell, but a techstack carefully arranged so that you don't have to touch the desktop mode a single time to work with it.

Most Linux distros use a display manager to handle user login and session/desktop flavour selection. SteamOS, in fact, use LightDM to do that in a headless way (without actually showing a login screen). It is configured to bypass the login screen, as described in the `lightdm.conf`, to prioritize the default `steam` user account. 

SteamOS has its own X11 compositor `steamos-compositor` located at `/usr/bin/`, which is based on [xcompmgr](https://wiki.archlinux.org/title/Xcompmgr). It does just one thing: to put the big picture UI topmost, surpassing everything other than it below. This is basically putting your PC into a supposed kiosk mode.

`steamos-modeswitcher` does the thing as the name suggests. It is the desktop/bigpic mode switcher. This constantly waits for a signal (like clicking a button that says exit to desktop) to perform the switch. LightDM is dispatched to kill the current X11 session and spawn a new one with Gnome session for a dedicated `desktop` user.

Oh let's not forget plymouth which shows a funny SteamOS splash screen for you to see so that you think Valve is a madlad for making a totally-not-like-any-other-Linux-distros OS (just kidding but im sure most non tech savvy people are like that. I can't make a distro myself so feel free to count me in).