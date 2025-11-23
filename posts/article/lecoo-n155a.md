---
title: "Lecoo N155A: a look at Lenovo's China-exclusive laptop"
tag: blog, tech, review, laptop, lenovo
---
So recently, I and my dad agreed on purchasing a new laptop for me to study in college. 
At first, I was a bit hesitate on what I would decide to choose.
Until I came across a shop that imports China domestic products (well, kind of? I don't know). 
They do have a lot of Lenovo-branded laptop computers, as, well, 
it's essentially a Chinese company (its native name is Lianxiang/联想). I am not a Chinese myself, and clearly not trying to say 
Chinese stuff are world-class or very best, but honestly, this device just somehow got into my impression.

## introduction / visual look

![front side of Lecoo N155A](/assets/pics/lecoo-n155a-front.jpg)

This is the Lecoo Pro 14 (also known as its model name N155A). You will probably have never heard of the Lecoo subbrand before. Me too. 
IDK what it is. Maybe it's a new brand? I've heard that it's sold within China, but I have no idea why did Lenovo supplied these to a
retailer located outside China (I bought it in a store in Hanoi).

I was impressed by how it managed to be incredibly thin and lightweight, while having some power sufficient for me to do a plethora of works.

Visually looking, it is sleek and thin. I can even put it on the stool and work with it all days long.

![alt text](/assets/pics/lecoo-n155a-put-on-stool.png)

The back side, as a random guy commented on a Discord chat, looks like it's inherited the design from Lenovo LOQ, a budget gaming laptop series.

![alt text](/assets/pics/lecoo-n155a-back-side.png)

Its cooling is a system of two fans blowing to the two different clusters of vents located behind the laptop base. I'm not surprised since the CPU it's cooling
isn't very much an ordinary laptop CPU, which is a performant one and would likely to generate tons of heat during its operation. Usually you will see 
a vast amount of non-gaming laptops having just a single fan cooling the CPU (of course, with heatsink and liquid conductor pipes).

On the lid, you can see that it looks incredibly minimal, with no other details than just the Lecoo wordmark.

![alt text](/assets/pics/lecoo-n155a-right-side.png)

*This picture would complete covering all five sides of the device. For a list of connection ports, see the table way way below.*


---

## tech specs and performance

Talking something more techie, here is a table of tech specifications I've collected about this device:

///     |  Tech specs 
------|------------------------------------------------------------------------------
CPU     | AMD Ryzen 7 H 255 (Zen 4, codenamed Hawk Point, 8c/16t, base 3.8GHz, up to 4.9GHz, 16MB L3 cache) 
...     | (Possibly a [Ryzen 7 8845HS](https://www.techpowerup.com/cpu-specs/ryzen-7-8845hs.c3400) equivalent?)
GPU     | AMD Radeon 780M (RDNA 3.0, codenamed Phoenix, 12 CUs, ~2.7GHz clock)
RAM     | 32GB DDR5 5600MT/s (Techwinsemi/Micron chip), dual channel, support up to 96GB
SSD     | 1TB PCIe Gen 4 NVMe SSD (Yangtze Memory-branded, 1/2 slots used, up to 8TB)
Display | 14-inch 2880x1800 IPS panel, 120Hz refresh rate, 400 nit max brightness, 100% sRGB colour pallete
Communication ports | 1x USB-C 4, 40Gbps w/ PD3.0 and DisplayPort output
...     | 1x USB-C 3.2, 10Gbps w/ PD3.0 and DP (same as above with halfass speed)
...     | 3x USB-A 3.2 Gen 1
...     | 1x HDMI 2.1
...     | 1x RJ45 Gaygabit Ethernet
...     | 1x microSD slot (SDXC?)
...     | 1x OCuLink (for connecting e-GPUs)
...     | 1x 3.5 millimetre headphone jack
Wireless comm. |   Wi-Fi 6E, Bluetooth 5.2 (Realtek 8852BE PCIe NIC card)
Camera  | 1080p webcam with physical privary shutter
Battery | 80Wh with PD3.0 charging (i.e. 100W max. thruput, estimated usage time 5-10hrs under light load)
Dimensions | 343 x 235 x 14 (millimetres), or 13.5 x 9.3 x 0.55 in
Weight  | 1.43kg (3.1lbs)

(table styling is broken for the time being. sorry.)

Okay. Now what do you think if an H-suffix CPU was placed in a laptop that was supposed to use a U-suffix one (as I assume so)? 
I mean, they did it. A real Ryzen powerhouse inside the chassis of a normal office laptop. 
The CPU scored about 6400 in a CPU-Z benchmark, which you can see the result 
[here](https://valid.x86.fr/m8gfhs). It was on par with the 8845HS. 

Beside just sitting around and doing benchmark, I have been using it right now in my everyday life. The memory boon seems like a miracle. No apps would 
ever use up to 32GB of installed memory. For most of the time, Windows and the boys' average usage is about half the way (15-16GB).

![Screenshot of taskmgr showing ram usage](/assets/pics/lecoo-n155a-ram-taskmgr.png)
            
And the CPU is incredibly idle too. This would have included a few \*active\* Firefox tabs, Discord, Chrome, Visual Studio Code and some more.

Saying the Radeon 780M: actually, when GPU-Z (a software similar to CPU-Z for GPU info) looks up for the device using ID strings,
 the [TechPowerUp website](https://www.techpowerup.com/gpu-specs/lookup?gpu=11a08f-1002:1900-2782:1170.BA.1024.0.0.) could not 
recognise the GPU is which (the texture rate and pixel rate were not identifiable by the software). 

![alt text](/assets/pics/lecoo-n155a-gpu-unidentifiable.png)

But after all, it functioned like a 780M, so I will assume it's a real 780M. It could have its ID strings changed due to it sharing package with a
market-exclusive CPU model (atm, you can't find a Ryzen 7 H 255 specification page on TechPowerUp). These details really make up well for our 
today's story. I will talk about the scarcity of information later.

Back to the CPU side. I've not tried video editing yet (which I will add later on), but for CPU-bound tasks, this laptop will handle just fine. 
I tried 86Box emulator with a 1995 Pentium 75 system, and it survived with 100% emulation speed almost all the time.

Can it game? Absolutely. Just... not that wonderful. The Radeon 780M is good (comparable to a GTX 1650), but gaming on a 3K (i.e. 2880x1800) resolution would significantly
reduce the performance for relatively demanding games. In the bottlenecking scale, the GPU would be a limiting factor. I have to lower the res all the time,
and tried using any sort of upscaling methods (ie FSR) where possible. Still, it is more comfortable than the older laptop I have (i5-7300HQ and GTX 1050).

Black Mesa got to run pretty good on there (around 60FPS, at 2560x1600 resolution).

![alt text](/assets/pics/lecoo-n155a-blackmesa.png)

As said, you can notice that the GPU is using 97% of its utilisation, while the CPU seems to be pretty laid-back with 18%.
I would have tried more games, but haven't collected much detail about them, so expect to see some additions. 

Running the device on battery, I'd expect to see around 5-6 hours of battery life during casual tasks, and maybe up to 10-11 hours if it just sits there idly. If there are some gaming, then it would reduce to somewhere under 2 hours (assuming the CPU and GPU are running under their designed TDP of 45W). 

The laptop runs pretty cool also. If it isn't gaming (during when the GPU would peak 55 Celsius/135 F), usually the GPU temp is 30 Celsius (~86 F) or so (I can't monitor the CPU, as some common hw monitor software tend to miss out the sensor, but I guess it's not much higher).

##

