---
title: Getting the desktop in SteamOS 2.0 (Brewmaster)
date: 2026-05-16
tags: steam, valve, debian, jessie, analysis, gnome
---


Now. Valve is making people hyped on their upcoming Steam Machine (second-gen) and a new VR headset called Frame, after their sucessful Steam Deck.

But what most people weren't aware of: they're all powered by SteamOS 3 (Holo), which is Arch-based. There were older SteamOS versions, SteamOS Alchemist and Brewmaster (1.0/2.0), which by now has been largely out of favour. They are vastly different from the new, current SteamOS version, being based on Debian Jessie (Debian 8), which has LTS support ended in 2020.

## what...
![Old big picture UI](https://i.redd.it/eoya14hf5kef1.png)

<small>the old big picture UI for ya... source: [a Reddit thread](https://www.reddit.com/r/SteamDeck/comments/1m70tbg/i_actually_really_miss_the_old_big_picture_mode/#lightbox)</small>

I wouldn't have time to go deep into this, but old releases of SteamOS was meant to be installed on the first-generation Steam Machines, made by OEMs like Asus or Gigabyte, and Valve licensed the OS to them. It wasn't a success for Valve, and they seemed to learn from their lessons.


In 2022, Steam introduced a huge revamp for the big picture (its primary GUI, tailored for controller navigation). This change was meant for the new SteamOS 3.0 which runs on the Steam Deck released that year (so everyone seemed to call it *Deck UI*). In another side, it also inevitably broke how old SteamOS versions work. If you have installed them today, you will see that it will never get to the big picture. You will stare at a black screen with an occasionally showing chunky mouse cursor. So far I've known no workaround to make the new UI work on old versions (beside running Steam with `-oldbigpicture` argument to use the old big picture UI, but it has probably been deprecated), and Jessie package repositories as well as Steam's own repos are falling behind for the more later, up-to-date SteamOS 3 pacman-based repos.

So now, I decided to take it apart. Or... more like trying to convert it into a familiar Gnome desktop which is behind all things about what you see in the big picture mode. Right now I have Brewmaster installed so let's get started.

<details>
<summary>A lil thing if you care...</summary>
bummer<br>
just kidding i was testing some new css colouring. looks good innit
</details>

## the thing behind your console-ish 10 foot gui

At the very basic. The big picture isn't just a shell, but a techstack carefully arranged so that you don't have to touch the desktop mode a single time to work with it (except first time configuration and when you need desktop to do something).

Most Linux distros use a display manager to handle user login and session/desktop flavour selection. SteamOS, in fact, use LightDM to do that in a headless way (without actually showing a login screen). It is configured to bypass the login screen, as described in its `lightdm.conf`, to prioritize the default `steam` user account. 

SteamOS has its own X11 compositor `steamos-compositor` located at `/usr/bin/`, which is based on [xcompmgr](https://wiki.archlinux.org/title/Xcompmgr). It does these things: to render the big picture UI, and put it topmost, surpassing everything other than it below. This is basically putting your PC into a supposed kiosk mode.

`steamos-modeswitcher` does the thing as the name suggests. It is the desktop/bigpic mode switcher. This constantly waits for a signal (like clicking a button that says exit to desktop) to perform the switch. LightDM is dispatched to kill the current X11 session and spawn a new one with Gnome session for a dedicated `desktop` user. You are not just switching the mode, de facto, you are switching to a different user account.

Oh let's not forget plymouth which shows a funny SteamOS splash screen for you to see so that you think Valve is a madlad for making a totally-not-like-any-other-Linux-distros OS (just kidding but im sure most non tech savvy people are like that. I can't make a distro myself so feel free to count me in).

There are several other `steamos-*` related executables, but these aforementioned things are mostly what undertake the bootstrapping and primary operation. From an end user perspective, they are totally invisible, in order to maintain a hybrid feel of a console interface which has a funny desktop behind you can use as a normal PC. 

## getting the hand dirty

Now I have installed SteamOS, given I have chosen Automated Install and waited patiently until it reboots several times, there's a time when it asks you to *choose bootloader path* (just type `/dev/sda`, or the first example in the dialogue screen), and *choose an action* after the Clonezilla program performs a disk clone, just select reboot. You will be greeted with a black screen. Well, cuz, yknow, it doesnt work.

![alt text](/assets/pics/2026/steamos-1.png)


Press Ctrl-Alt-[anything from F2-F6]. Login with user `desktop`. It doesn't have a password. You are now at the terminal, where you get things to happen.

The LightDM primary config file (`/etc/lightdm/lightdm.conf`) is used to grant the `steamos` user and the compositor a seat to be started at setup. They seems to choose to hardcode all their configurations there to reduce further fusses.

Using `grep -r "autologin-user" /etc/lightdm/` should return several lines with `autologin-user`. 

![alt text](/assets/pics/2026/steamos-2.png)

Hmm... doesn't seem like anything. Now open `lightdm.conf` (don't forget the full path) with your favourite editor as the `sudo` right, i.e. `sudo nano /etc/lightdm/lightdm.conf`, look for `Seat configuration` string, and if you see the seat section reading like `#[Seat:0]`, remove the hash ('#') and add these below:

```conf
autologin-user=desktop
user-session=gnome
```
<mark>Just so you know: anything beyond changing this LightDM configuration file is optional.</mark>

Now you can happily remove the `steamos-compositor` using apt if you want.

OBTW, do not run `sudo apt remove steamos-*`. This will also involve LightDM to be in the execution chain and will leave you in the text mode the next time you login.

Now do a `sudo apt-get autoremove` to remove things that you don't need (some specialized drivers and libraries). 

If you want a normal console bootup, just remember these steps and comment out these changes by adding the hash ('#') in the leftmost of each line. But hey, since its broken now, you might not want to even do that.

---

And it's the moment of truth: type `sudo reboot` for a thrilling feel.

![alt text](/assets/pics/2026/steamos-3.png)

Tu tu tu duh (~~max verstappen~~ /j). So here you go, that's the SteamOS desktop. Don't think it will have any use today, as it is based on an old Debian base, and any repositories for it might have gone into the legacy phase.

The old Gnome 3 looking gave me a sense of nostalgia, with highly skeuomorphic, Android 4.x-like UI elements.

![alt text](/assets/pics/2026/steamos-4.png)
![alt text](/assets/pics/2026/steamos-5.png)

There is Firefox 60.7.0esr (extended support release) preinstalled, among other stuff.

It's a bit broken though... many websites doesn't show properly.

![alt text](/assets/pics/2026/steamos-6.png)


## conclusion

And well that's it. Just a lil thing I discovered during my most busy hours and then spared it to write my blog in a more free time. I'm personally still looking towards the Steam Machine release, as well as whether Valve will decide to grant OEMs the OS licence to help them produce their own models of Steam Machine, just like the old days...

I'm sure that Valve should have a different move today. But anyway, a little blast-to-the-past plus free time tinkering.

I originally titled this article "De-Steaming SteamOS[...]", but given that I've just made little efforts to automatically log into a working desktop, I shouldn't consider it a De-Steaming process. Would like to make a real De-Steaming article right now, but I'm afraid I just don't have much time. So that's pretty much it.