---
name: what we're on about security
date: 2026-10-22
tag: blog, security, opinion (ig)
---

earlier today (21/oct/2026@zulu+7) i've read this ars technica article.
 it's a long one, mind you. to sum a bit up, i'd just cite this preface line:
 > Security personnel around the world are on high alert Tuesday following the discovery of eight TLS certificates with private keys so weak they could allow anyone to mint trusted browser and app credentials for any site on the Internet.
 >
 >   <small>Ars Technica, [*The Internet goes on high alert after discovery of 8 compromised TLS certs*](https://arstechnica.com/security/2026/10/the-internet-goes-on-high-alert-after-discovery-of-8-compromised-tls-certs/)</small>

 i apparently cant get to read all the article enough. but whats surprising is, many websites and smart devices on the world are found to have used a few mind-blowingly weak, short private keys used to sign TLS certificates. that said, its like using 123456 for your wi-fi password. or using [wep cryptography](https://en.wikipedia.org/wiki/Wired_Equivalent_Privacy) to a modern wi-fi access point. or even worse depending on how you see it.

so what are the private keys?... you know. 4. yes, there is a key that says 4. just the number 4. that does not even look like a security key. it could be anything. btw, all the keys found are `4`, `56`, `66`, `115`, `155`, `156`, `230`, `237`. i doubt thats even all of them though. i feel like there could be ""slightly stronger"" ones with four digits and more, but still ridiculously crackable. still though, the attacker has to be a middle-man proxy in the connection to attempt to break in, and various actions has been taken to prevent connecting to certificates with the mentioned level of security.

i also particularly like this statement as a grain of salt:
> “Maybe some horribly dangerous key generation interface has a ‘size’ parameter and they set it to 1 by mistake???”

from that alone, i have a thought. what have we been doing to let a *serious flaw* get in? 

***

### bkav

i recalled there was a security breach that happened in a vietnamese cybersecurity firm called [BKAV](https://en.wikipedia.org/wiki/Bkav) back in August 2021. this is, in fact, not very well-known outside vietnam. a hacker, going with the alias "chunxong" has gained access into BKAV servers using SQL injection, including source codes (for their products, notably the anti-virus software), chat logs and many other internal data. they were later listed for sale on *RaidsForum* (a former hacker's forum now seized by the FBI) totalling US$280,000. 

BKAV denied that their servers were taken offline afterwards, after chunxong claimed that BKAV has shut down their servers when they [chunxong] promised they would do a live stream where they attempt to perform a penetration on BKAV servers. some allegations and assumptions are made by BKAV that chunxong was a former employee and that the data are from old modules that would not affect existing customers. as a response, chunxong insisted otherwise; they claimed they did not work for BKAV and those data are new. they also posted a couple of videos showing proofs that they had access to their servers. 

SQL injection is a filthy old trick. what should not happen in a cybersecurity company in fact, already did so. that said, it was conceived to be too incapable of protecting itself against even an entry-level kind of exploit like SQL injection. besides, its antivirus software, claimed to be in the worldwide top ten of its kind, has made various mistakes in the past, and scored low in benchmarks. BKAV continues to do business today. but seemingly without a recognition for any shame of the past.

if you want to learn more about it. i suggest reading this [vnexpress article](https://vnexpress.net/hacker-da-tan-cong-bkav-tu-mot-loi-co-ban-4341131.html) and [this blog post by thai duong](https://vnhacker.substack.com/p/bkav-bi-hack-nhu-nao) (my goat!) (in vietnamese though. feel free to use a translator they're probably pretty good at it now.)

### so, while we're here...

what are we on about security? what's happening with all of these information systems when they are hacked? i'm not a sysadmin myself (yet...), but i think we can often see that, there is some form of neglect that comes from the people who operate the systems, when they cannot grasp what aspect of security can be addressed. of course, as we're human, we make mistakes, and we have limits. and the faults sometimes are not totally from the operators/admins themselves. but once they know the limits, and know the impact of every action, and have a will to look at the truth... everything can feel less like a hassle, depending on the situation. cybersecurity is not only about not being hacked, but also about how to maintain the clarity of mind, and the soundness of judgment.