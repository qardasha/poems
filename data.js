let poets = [];

class Poet {
	constructor( { name, photo, bio, poems = [ { } ] } ) {
		this.name = name;
		this.photo = photo;
		this.bio = bio;
		this.poems = poems;

        poets.push(this);
	}
}

// COMPLETE
let orzan = new Poet(
	{
   		name: "Orzan Bin Muhammad",
   		photo: "https://media.discordapp.net/attachments/1041716359354134650/1044508311074119710/6499521845fff46a3fb31236f6d81977.png",
		bio: "Sultan of the Great Sultanate of Qardasha",
		poems: [
            {
                titles: ["কি ভালো নেই?", "What is not good?"],
                texts: [
`কি ভালো নেই?
আমি বলি কি ভালো নেই,
আমার মন ভালো নেই, আমার জীবন ভালো নেই, আমার চা, আমার মা, আমার বাপ--
আমার পরিবার, এই দুনিয়া। 
আমার ভাইরা, আমার বোনরা, এই গরম পানি--
গরম পানি? জি। এই চা তা চা নেই, এই চা তা গরম পানি 💔 

আমার চা ঠান্ডা 😭 
হে খোদা, কেন এই সমস্যা আমাকে দিসেন?!
যখন ওরা বলে "কেমন আসেন"
আমি চুপ থাকি।`,
`What is not good?
Let me say what is not good,
My mind is not good, my life is not good, my tea, my mother, my father--
My family, this world.
My brothers, my sisters, this hot water--
Hot water? Yes. This tea is not tea, this tea is hot water 💔 

My tea is cold 😭
Oh God, why have you given me this problem?!
When they ask "how are you"
I stay silent.`
                ],
                languages: ["bn", "en"]
            },
	    {
                titles: ["Mon Thé Adoré", "My Beloved Tea"],
                texts: [
`Mon amour... mon thé adoré,
Hop! Hop! Hop! J'aime tu, Je t'aime, j'aime manger
tu. Je veux nager...
Je veux nager en toi--

mon thé adoré! mon thé adoré!`,
`My love... My beloved tea,
Hey! Hey! Hey! I love you, I like you, I like eating
you. I want to swim...
I want to swim in you--

My beloved tea! My beloved tea!`
                ],
                languages: ["fr", "en"]
            },
	    {
                titles: ["Bismişah Allah", "In the name of the King and God"],
                texts: [
`Ya RasulAllah,
Ya Fatih Sultan,
Bismişah Allah,
Ey ibn Muhammad Padişah,
Hayde Ya Allah,
Ey yiğit sultan,
La ilaha ilallah,
Bismişah Hayde Ya Allah!

Ya rasulallah,
Ya nabi allah,
Ey Orzan Padişah,
Ey yiğit shahanshah--
Bismişah Hayde Ya Allah!`,
`Oh Messenger of God,
Oh conquering sultan,
In the name of the king and God,
Oh son of Muhammad king,
Forward in the name of God,
Oh brave Sultan,
There is no god but god,
Forward in the name of the king and God!

Oh Messenger of God,
Oh Prophet of God,
Oh King Orzan,
Oh Brave King of Kings,
Forward in the name of the king and god!`
                ],
                languages: ["tr", "en"]
            },
	    {
                titles: ["The Saddest Thing Ever"],
                texts: [
`The Saddest
thing
Ever,
is when your
Chai
gets cold 💔`
                ],
                languages: ["en"]
            },
            {
                titles: ["Intoxication"],
                texts: [
`Sharap; a drop of heavenly wine, makes me feel alive again.
What has been said, has been said.
A beautiful taste--even if I was dead--
I would rise up just to adorn the taste again.

I write in a drunken state,
We will all meet our fates,
A single drop and I am hooked, no more games--no more "check mate,"
I can no longer bear the wait--I am longing just for another taste...

I am blind but I can clearly see,
For it is not my eyes but rather my heart, for I have not yet set it free,
A drop of heavenly wine teaches me what it means to be,
Am I wrong to allow my pen to sing?

This wine of mine is not a drink,
This sharap is the wine of love--love for he,
He who has created me,
He who as allowed me to be--he who has allowed me to be Munshi...`
                ],
                languages: ["en"]
            },
	                {
                titles: ["ইসলাম জিনদাবাদ", "Islam Zindabad (a Shayari)"],
                texts: [
`রোমানস্, পার্সিয়ান, রাশিয়ানরা, মুশরিকরা, আর এখন আমেরিকা...
সবের বড় দেশ, আমরা শক্তিশালী,
আরবিয়া, আফ্রিকা, তুরস্ক, বলকান, পারস্য, হিন্দুস্তান, আর আরো ইনশাআল্লাহ...
সবাই ভই পাই, ইসলাম জিনদাবাদ, আমরা শক্তিশালী!`,
`Romans, Persians, Russians, Polytheists, and now America...
All the big nations, we are strong,
Arabia, Africa, Turkey, the Balkans, Persia, Hindustan, and others InshaAllah...
Everyone is scared, long live Islam, we are strong!`
                ],
                languages: ["bn", "en"]
            },
                        {
                titles: ["من حژتم عرزن", "I am Orzan (Patriotic Song)"],
                texts: [
`من حژتم عرزن، پاديشاة،
يهك قارداشى، ناميے سلطان ى سلطان،
عرزن الشاة عظيم،
بى الله، الرحمن الرحيم،
من حژتم شاة.

من حژتم عرزن، شاة جحن و عبد المليك عظم، الشاة عظم، سلطان پى قاردايشا، سلطان بى الإكسرا، روپية، اردسطان، امير المسليمنى پى العرب. إبن محمد-إبن منشى، الحكيم، من حژتم امير السيف، الخليد پى الغرب.`,
`I Am Orzan, High King,
A Qardaishan, granted the name of 'Sultan of Sultans,'
Orzan the great king,
By Allah, the Most Merciful, the Most Gracious,
I am king.

I am Orzan, Shah-Jahan (king of the world) and servant of the true king [Allah - saying that my title is Shah-Jahan but that title only belongs to Allah the true king], the powerful and great king, Sultan of Qardasha, Sultan of Exrio, Ropia, Urdistan, Commander of the Muslims of the West. Son of Muhammad-Grand Son of Munshi the wise, I am the commander of the sword, Khalid of the west.`
                ],
                languages: ["qr", "en"]
            },
	                {
                titles: ["হূ... ইলাহূ...", "Hu.... Ilahu..."],
                texts: [
`হূ... ইলাহূ...
ইয়া এলাহী, ইয়া এলাহী, হূ হূ হূ!
যদি আমি তোমার মাওলা, তাইলে আলীও (রা) তোমার মাওলা!
হূ হূ হূ হূ হূ... ইলাহূ.. ইয়া রাসূল, ইয়া জান আগা!
হূ হূ হূ হূ হূ...ইলাহূ...`,
`hu.... ilahu...
Oh, my God, Oh, my God, hu hu hu!
If I am your master then Ali is your master too!
Hu! Hu! Hu! Hu... Ilahu... O messenger, O beloved sir!
Hu hu hu hu hu.... Ilahu...`
                ],
                languages: ["bn", "en"]
            },
            {
                titles: ["It Is you I need alone, you"],
                texts: [
`Every Majnun needs his Layla, every Romeo his Juliet.
They say that love completes the soul, but every sun must set. 
A drop of heavenly wine falls from my lips, my lips, ever so wet,
What has been done, has been done, who has been killed, is dead.
What has been said, has been said, whoever reads, has read.
What has been written, has been written, we all have a fate that is to be met.

Every ‘good thing’ must come to an end, even the moon must set,
What has been done, is done, and who has been killed, is dead. 

My mind is clouded, by this sip of heavenly wine,
You of all people should know I am not fine,
Can you accept that everyone must die?
Are you even trying to make it by?

It is you I need alone, you.
I have seen what there is to see, I have seen the proofs,
I have heard what there is hear, I have heard the proofs,
It is you I need alone, you.
Only you are the one who is able to help me through and through,
It is you I need alone, you.`
                ],
                languages: ["en"]
            },
            {
                titles: ["الپآنا ى زينديگى", "The Good Of Life"],
                texts: [
`تو پآناإيے من زينديگى،
تو پآنا ى زينديگيزيا، كهت من ى پيميے نگرى،
كهت تو ى ماة ى من كه راتى،
كهت زيا جحّنمى مى،
تو ى جنّة مى،
كهت من ى زيا تو،

دنيةإيے، من زيند پهر تو،
من زيند ى زيا كهت كربلا،
من ى ونت ى زيا مسجد الحرام تو!
اللهم كهت زيا كربلا نوس!
كربلا كربلا،
كهت لا شعيسمكا، و سونّيكا، نوس موته مسلمن،
كهت لا نگه تو؟!
يا حسين!
من حژتم عشاقى تو!
يا حسين 💔 `,
`You are sweetness to my life,
You are the good of my future life, I'm pure darkness,
But you are the moon in my nights,
Even if I will go to hell,
You are my heaven,
When I go close to you,

In this world, I live only for you,
I live to go to your Karbala,
I want to go to your holy mosque (shrine),
Oh Allah, let us come to Karbala,
Karbala Karbala,
There is no Shia, No Sunni, No Muslim (all muslims),
Who doesn't love you!
Oh Hussain!
I am your lover!
Oh Hussein 💔`
                ],
                languages: ["qr", "en"]
            },
            {
                titles: ["باشى ى عظم و ڤازير ى عظم", "Supreme Chief and Grand Vizier"],
                texts: [
`بشى ى عظم، بشى ى عظم، ڤازير ى عظم ڤازير ى عظم،
اى تو كهت عبد الحونكار-

سيف وو درهم نگرياژ نگر،
عبدالحونكار كهت ى نگر نگر،
شهحهر شهحهر ژلى زلى، پآنا چهرا كهت على،
حوا موته طآگى من حژتم قارداشى،

يا وطن وطن، كهت ى الپنا تو؟
يا وطن يا وتن، لهت ى پيلار و حونكار تو ڤو؟!
سهحهر سحهر ژلى زلى، بآنا چهرا كهت على!
طآكى من حژتم قارداشى

دة و، دة و، كهت الالپ ى طتنم،
اى وطن، آى وطن، حذا الباشى ى عظزم و ڤازير ى عظم!`,
`Supreme Chief, Supreme Chief, Grand Vizier Grand Vizier,
Oh you who serve the sovereign-

swords and shields have been used,
servants of the sovereign who are used,
city to city, street to street, happy faces on everything,
they [all] say "I am Qardaishan!"

Oh Homeland, Oh Homeland, where is your heroes?
Oh homeland, oh homeland, where are the pillars and your sultan too?!
from city to city, street to street, happy faces on everything,
Say "I am Qardaishan!"

Doh vav, doh vav (2 v's meaning W)
The heroes of my homeland,
Oh homeland O Homeland, this is the Supreme Chief and Grand Vizier!`
                ],
                languages: ["qr", "en"]
            },
            {
                titles: ["سلام", "Salam", "Peace"],
                texts: [
`سلام، من عشاقى
حذا الطآكيے پى عشق مى
ظآلظليگى مى، حے جان اقا جان اقا جان اقا
كهت من حستم مولا تو كهت علي مولا تو ڤو
سلام يا حسين، يا جانهم، جان اقا جان اقا
حذا لا ڤهلو
هءحذا عشق`,
`Salam, man eshagi,
haza al-tokiye pi eshq mi
zolzoligee mi, hey jaan aga jaan aga jaan aga,
keht man hastam maula to keht ali maula to vo!
salam ya hussain, ya jaanem, ya jaan aga jaan aga,
haza la velo,
haza eshg!`,
`Peace be to you, my lover,
This is a declaration of my love,
my anti-enemy, hey beloved sir, beloved sir, beloved sir,
If I am your master then ali is your master too!
Peace be to you O Hussain, Oh my soul, O beloved sir, beloved sir,
This isn't friendship,
This is love!`
                ],
                languages: ["qr", "qr-en", "en"]
            },
            {
                titles: ["صهنه وطنم", "Dear Homeland"],
                texts: [
`صهنه وطنم 
صهنه وطنم ى مسلمن،
صهنه وطنم حے ميلّهت ى مسلمن
آى قاردايشا اى من جان،
كهت خرسن، كهت إيرن، كهت السعد، من مآنيے قاردايشا!
صهنه وطتنم، صهنه وطنم،
يا الله اكبر الله اكبر الله اكبر!
آوتح يا سيف الإسلام، يا سيف القاردايشا!`,
`Dear Homeland,
Dear homeland of muslims!
Dear homeland, hey, nation of muslims!
O Qardasha O my soul,
Where is Afghanistan, where is Iran where is Saudi Arabia, I only think about Qardasha!
Dear Homeland, Dear Homeland,
O, God is the greatest, god is the greatest, god is the greatest!
Rise O swords of Islam O swords of Qardasha!`
                ],
                languages: ["qr", "en"]
            },
            {
                titles: ["Al-Andalus"],
                texts: [
`Arabian flutes in the grand bazaar, men with blue turbans, Oh, Al-Andalus.
The women in veils, the breeding of cultures, by my turban, Oh, Al-Andalus.

The great guitar, in such a grand bazaar, the desert wind in my hand oh Ashiq,
Wouldn’t you love to be here with me, Ashiq? Take my hand & go to Al-Andalus.

The chantings of a mystic, the Andalusian music, here in the grandest bazaar,
By my turban, O Ashiq, you would love to be here, here in Al-Andalus.

The women dancing as does this ghazal, Hayati, take a trip to Al-Andalus!
Suddenly, a change in the air, I am no longer in the great bazaar of Al-Andalus.

“Grandfather, you must move on,” A voice says. I refuse! Lo! This is my Andalus!
Ashiq! O Ashiq! Don’t you remember the great music of Al-Andalus?

Lo! Look at what they have done to our precious mosques! 
They have raised their infidel crosses in our precious Al-Andalus!

The same pillars that are in Ahmad’s palace, look at them now!
Now they are adorned with Christian crosses; our precious Andalus!

I remember the old livelihood of our great gem, our beautiful Andalus.
But do you Ashiqi? Do you Munshi? Do remember Al-Andalus?!

I want to return, I want to go back, and I want to be there soon!
I crave the old bazaar, the once grand and festive bazaar of Al-Andalus!

Oh, Munshi! Please! Speak the truth! Teach them about you!
You! Oh, Al-Andalus! Teach, sing, and praise our beautiful Al-Andalus!`
                ],
                languages: ["en"]
            },
            {
                titles: ["On the Twelfth of November"],
                texts: [
`Our cause is just, victory will be ours...

On the twelfth of November,
Nearing the twelfth hour,
The capital was taken, we were told
That the war has begun.

The war continued into the next night,
To liberate the east,
Parents and children where sleeping,
When the final game was won.

Big waves of the enemy were coming,
We were outnumbered 10 to one!
For the sake of our dear Islam,
The people of Russiaka rose up!
Yet only Sultan and General remained!

On the twelfth of November,
Nearing the twelfth hour,
The capital was taken, we were told
That the war has begun.

The war continued and the west was liberated!
And on the blessed 15th the treaty was signed,
And Russiaka was Khalas!`
                ],
                languages: ["en"]
            },
            {
                titles: ["Yawm-e Azadi (Bilingual song in English and Qardashi)"],
                texts: [
`Slava... Slava Ey vatanam-e Qardaişa... Ya Yawm-e Azadi
(Glory to... Glory to you O homeland of Qardasha... O Independence day!)
Yawm-e Azadi, oh how far it was from us it was,
Haza Yawm-e Azadi (This is Independence Day)

Air saturated with gunpowder,
Today is a holiday,
Look at how we've grown! Are we not better?
It's a holiday!
O mother, do you remember when your sons came back from war?
O soldiers, do you remember when you fought for her?
Freedom! We are the doom to the communists, we are the doom to the fascists!
Beacon of Islam! Ya Allah!

Nus toki-e "Salam Ya... Salam Ya..."
"Salam Ya Russika~"
Vatanam nus e avayt nus! Al-telo ve pani
Moniye nus, al-alp e armiya Qardaişa
keht pona duniya e komoradkism ve fasistika!
Vatan nus e avayt nus! Al-telo ve pani!

We bid farewell... farewell...
Farewell O Russiaka~
Our homeland awaits us! The water and water! (telo being the native word and pani being persian - symbolizing seperation from Russiaka)
Remember us, the heroes of the Qardaishan Army,
Who made the world better [by ridding] communist and fascism!
Our homeland awaits us! The water and water!`
                ],
                languages: ["en-n-qr"]
            },
            {
                titles: ["Turkish Effendi"],
                texts: [
`Walking down the beloved streets of Istanbul, hearing poetry by a Turkish Effendi. 
The great bazaar, a soft rain slowly pouring over the lovely poetry of this Effendi.

Strikeful! Thou hast pierced my heart with such melody,
Alas, this is the work of those who call themself ‘Effendi!’

Sir! Oh, Sir! How hast thou learned such a craft, a tune that has bewitched me?
I followed you to Baghdad, hast thou ever heard the craft of a Turkish Effendi?

Next to Damascus! Spreading knowledge and peace among the lands with melody!
This is the work of a master, hast thou ever heard the craft of a Turkish Effendi?!

Next was an unexpected stop, my mother's heart, a beautiful visit to Indian Delhi!
Having Chai like never before, listening to poetry in my mother’s tongue, Effendi,

Thou is a master of many languages, your flute and words a spell that captured me
You teach about love, about sadness, the world that is unknown to me, Oh Effendi!

Now this moving ghazal, it’s words dancing like you to your own melody!
Oh you who read! Hast thou heard the craft of a Turkish Effendi?

Oh how you’ve inspired me. I follow you without even knowing thou’s name,
You’ve reaches such fame, but you only dance and sing only as a Turkish Effendi!

With your works you’ve inspired me. With your tune you’ve bewitched me,
I am only a Munshi, yet you’ve become my Maula, O you, Turkish Effendi!`
                ],
                languages: ["en"]
            },
            {
                titles: ["مآلى پآنا ى زينديگى", "Death Is Better Than Life"],
                texts: [
`اى تو كهت ناگه ى زينديگى،
تو كهت لا صآنا كهت دنيا إكه ى اخيرى،
مآلى بآنا ى زينديگى، مآلى يه زينديگى، مآلى يه زينديگى،
اى تو كهت نام ى قارداشى،
كهت كهت كهت كهت؟!
كهت الله تو؟ كهت دين تو؟ كهت إسلام تو؟
مآلى يه زينديگى مآلى يه زينديگى مآلى يه زينديگى!

إنّى مآلى بآنا ى زينديگى. 
آوتح آوتح آوتح يا قارداشى!
آوتح يا موسلمنى!
كهت تو إسلام يا نبى؟`,
`Oh you who love this life,
Don't you know that the Akhira is better than this world?
Death is better than life, Death or life, death or life,
Oh you who's name is Qardashi,
why why why why?!
Where is your allah, where is your religion? where is your Islam?
Death or life death or life death or life!

Indeed death is better than life.
rise up rise up rise up Qardaishans!
Rise O Muslims!
Where is your Islam O prophet?`
                ],
                languages: ["qr", "en"]
            },
            {
                titles: ["মন ভালো নেই", "Not Feeling Good"],
                texts: [
`মন ভালো নেই,
কেন? কারন আমি জানি ইসলাম তা নেই,
এই জায়গাই আর বাংলাদেশ,
এবং আপনি থাকবা না-
ও, আজকে আমার মন ভালো না!`,
`Not feeling good,
Why? Because I know there is no Islam,
Not here nor Bangladesh,
And You won't stay-
Oh, today I am not good!`
                ],
                languages: ["bn", "en"]
            },
            {
                titles: ["Another Still Night"],
                texts: [
`When you show me your love it only hurts me.
I just want to be happy.
I just want to be happy…
Oh you, Munshi,
Weren’t you the one who knew how to be free?
So then why is the dove that is your soul locked away?
If you hide your feelings, the pain won’t wash away.

Another days go by,
Another week goes by,
Another month goes by,
Another year goes by,
As time flies,
Chaos ensues in my mind.

I know the cure to this sickness.
This sickness of the heart.
Yet for some reason, I don’t want to cure myself,
Even though there’s an easy way to do it.

I simply just want to be happy…
In a gentle town of yonder,
The calm, creeping in faster,
The soft still winds never seemed to falter,
My mind, unable to stop in one place.

It’s a still, still night.
Trying to sleep with all my might,
Yet my eyes don’t falter,
Not something I can alter,
My mind still at wander,
Unlike my heart; a bird unbound.

I remember that Ramadan when my pen ignited,
And burnt the pages with poetry.
My pen, teaching people how to feel.
Now it is my heart that is short-sighted
Repeating the words: “I just want to be happy,”
Every night, by my bed I kneel,
Asking for relief.

I remember my hero saying his flute would die out,
Now I wonder if my pen will die out
too.

Nay! I refuse!
I will not give in to the accursed lies!
‘Tis nothing but a muse,
And I am but an awful sight.
I truly need to make things right…`
                ],
                languages: ["en"]
            },
            {
                titles: ["اى ماظلومى", "O Oppressed"],
                texts: [
`اى ماظلومى ،
اى تو كهت طآكى إسلامى،
اى تو كهت زينديگى ى علي،
اى تو كهت نام ى محمدى،
اى تو مسلمنى كهت ماظلومى،
اى تو كهت نام ى قارداشى،
تو ى لا عزادى،
كهت تو زينديگى؟

يا ماظلومى ى ميتاے، آوتح چے!
لبيك وطنم ى پيميے!
 آوتح چے!  آوتح چے!  آوتح چے!
 آوتح چے ى ميتاے ناس موته!`,
`O Oppressed!
Oh you who says [words] Islamic, 
O you who's life is Ali,
Oh you who is labeled Muhammadi,
O you muslims who are oppressed,
Oh you whose name is Qardashi,
You have no freedom, (as the oppressors have taken it away; the oppressors being the enemies of Qardasha)
Where is your life?

O [you] who is oppressed from their lies, Rise up!
Glory to the black homeland! (black meaning Islamic - also referring to the black banner of Qardasha/Islam)
Rise up! Rise up! Rise up!
Rise up from their lies!`
                ],
                languages: ["qr", "en"]
            },
            {
                titles: ["What Is This Feeling?"],
                texts: [
`I want to write but my hand refuses to pick up the pen.
I want to read but my body refuses to leave the bed.
I don’t understand these thoughts in my head,
Nor these feelings in my heart.

I am bedridden from this sickness of the heart,
Without knowing what it even is.
Just as everything that has a start,
Everything must have an end.

I say “I’ll get better soon!”
But here I lie, still confined to my room.
Ah, but it’s nothing new,
Either way, we will all return soon…`
                ],
                languages: ["en"]
            },
            {
                titles: ["What do you know about how it is to lose?"],
                texts: [
`Ah, I know that every soul will taste death,
This is a fact that my heart refuses to accept!
Before you call me selfish;
What do you know about how it is to lose?
What do you know about watching someone leave?
What do you know about saying your last goodbyes?

What do you know?!
What do you know?!
Oh, my master, I remember when we mourned your parting,
I wait for our eventual meeting,
But this is different… 
You tell me to let go; I have too much attachment,
But how! What do you know?!

Say: “If I am your master,
Then Ali is your master too!”
My students say to their teacher
“You will reunite soon!”

But what do they know?
Have they felt the pain?
Oh, what do they know?!
To lose so quickly this way?!

A hole in my heart has been created so deep,
I know not if it will heal at all.
Tears blinding me, I can’t see,
My heart; null!


Woe! My heart is broken!
Oh! My wings are broken!
You can no longer come to me tonight!
I suffer without you!
Oh, you should know I am not alright!
I suffer without you…

Woe! My heart is broken…
Oh! My wings are broken…`
                ],
                languages: ["en"]
            },
            {
                titles: ["Sweet Drops of Milk and Honey"],
                texts: [
`Sweet drops of milk and honey,
Falling ever so faintly,
A sweetness in my mouth turned bitter.
If you consider me your master,
Then Ali is also your master… 

I am under a veil, your words no longer hurt me.
Why should I pain myself over you when my lord has words of power which comfort me?

Slow and steady wins the race they said,
Everything will eventually work out they said,
But I wasn’t prepared for the hours spent in bed,
Crying my poor eyes out. 

My head pounds after taking this useless pill,
A growing desire, a desire to kill,
It’s late and dark,
I have almost given up…`
                ],
                languages: ["en"]
            },
            {
                titles: ["Call Me Murshid Tonight"],
                texts: [
`If this world is a prison; break free says Rumi.
The truth is that it is not that easy,
Take my hand, love, and call me Murshid tonight.
Pleasure's time has arrived, yet after, we struggle to get by,
Take my hand, love, and call me Murshid tonight.

We are slaves of sin and this world,
How to be free is within Munshi's word,
Take my love, and don't distort,
Make this world your own.

Oh, but it's not that easy,
You aim the shot and say "Kill me!"
This type of death is not how to be free,
Only if you could see.

Take my hand, love, and call me Murshid tonight.
With every darkness, will return the light;
Take my hand, love, and call me Murshid Tonight.`
                ],
                languages: ["en"]
            },
            {
                titles: ["من حستم قارداشى", "I am Qardaishan"],
                texts: [
`إسلام زينداباد، إسلام زينداباد،
يا زنديگى مى،
ناس موته ناميے من القارداشى،
يا وطنم، لبيك ى تو! يا زنديگى مى!
من اغا زينديگى، من غازى پهر قارداشى،
تو كهت؟ تو كهت؟ تو كهت؟
طآكى: "من حستم قارداشى! من حستم قارداشى!"

إسلام زينداباد، إسلام زينداباد، إسلام زينداباد، إسلام زينداباد،
يا سلطن نوس كهت تو؟
من حستم قارداشى، من قارداشى!

طآكى الله اكبر، طآكى كاردايشهم!
يا وطنم يا جانهم!
يا پاشا يا الپ نوس،
لبيك لبيك لبيك ى البانهر قارداشي!`,
`Long live Islam, Long Live Islam,
Oh my life,
Everyone gave me [the] name Al-Qardashi (the Qardaishan)
Oh my homeland, glory be unto you!
What are you? What are you? What are you?
Say: "I am Qardaishan! I am qardaishan!"

Long live Islam, Long Live Islam, Long live Islam, Long Live Islam,
O our sultan, what are you?
I am a Qardaishan, I am a Qardaishan!

Say; Allahu Akbar, say: I am Qardaishan!
O my homeland, O my soul!
O Pashas, O our heroes,
Glory, glory, glory be to the Qardaishan Banner!`
                ],
                languages: ["qr", "en"]
            },
            {
                titles: ["Qardasha Will Prevail"],
                texts: [
`Oh mother, I can't bear to see you suffer any longer.
Father, stop drifting farther and farther...
Oh lions! Forward in the name of your nation!
Sing happy songs of the homeland!
Your enemies will condemn you to damnation! 
Your life belongs to the people, lay it down for the motherland!

We do not seek war, war seeks us!
We turn the is to was!
You're facing the best of undefeatable men!
You better pray to god to forgive you, because you won't win!
Think again, think again, before we have you hanging by your skin!

Terrorize us, slander us, attack us,
Then to you I say:
Turn on your news channels and see what happens to your men as they weep!
Your suffering for us is meek!
Once you've crossed us we will send you to the gates of hell ourself!
Come after our leader and you won't be able to tell the tale yourself!

Turn on your news channel, and see what's left of your men as they cry!
Once you mess with us, you'll barely get by!
Don't you know that we have Allah on our side?
Till our last breath we will fight!
The word "surrender" does not exist to us!
The homeland will prevail!
Qardasha will prevail!

Send your slanders Oh send your slanders,
We will take your towers and use them as our armrests!
Qardasha will prevail!
Oh, Qardasha will prevail!`
                ],
                languages: ["en"]
            },
            {
                titles: ["Faint White Flower"],
                texts: [
`I saw once a faint white flower,
O’er the great ruined tower.
O’er the muddy and bloodied field of power.
It’s not that easy to return to the light,
Be my torch O friend!

I know what I must do,
But it’s not that easy to do.
O, friend! Speak to me only what is true!
Tell me all, even if it’s cruel.
I no longer want to be used, used like a tool.
I am no longer a fool!

O, my mother who is dear to me,
I know that this is a painful sight to see,
Think of the white flower
That is your daughter.

O, beloved to me,
Forget that you ever saw me!
I thank you for your love which made me pure once more!
But forget, forget, forget! I am not worth your time anymore.

Brother! Do not bother!
It is not worth your precious time anymore, do not cry when I walk out the door.
Son! Forget all that I taught you!
My word was never true…
Daughter! Stay with your uncle he will protect you!
After I am gone, you will get your due!

Mujhe maaf karein! (Forgive me)
Aur namaz parein! (and pray)
Pray for me…
Your prayers will set me free!

Oh, I can hear my family walking away from me.
As I am in this place that is deep,
Deep below the ground.
I hear angels; “Who is your lord?”

My eyes are finally closed.`
                ],
                languages: ["en"]
            },
            {
                titles: ["Under The Night"],
                texts: [
`With every sunrise, the sun must set.
Yet when I return in the morning it doesn’t feel the same.
I’m afraid; I know not what will happen next.
I’m afraid; I can’t seem to see my way.

My heart burdens mountains,
Relief, unable to reach it.
My only goal is to reach the gardens.
I can’t seem to find a way to fit in.

I’m a good liar, I can hide,
I’m a good hugger, I can’t fight,
It’s dark here, someone turn on the light.
I turned off my voice, no one can hear my cries.
How can I be sad when water won’t fall from my eyes?
Staying up all night, I’m wondering “Why?”
Here under the dark night sky, I begin to write.
This is the product of a man who can’t cry.
This is the only way his emotions can get by.

The dimly-lit night sky watches over me.
With every letter I pen, I am one step closer to being free!
I am blind, my heart refuses to see,
The way to be happy.
Ya Shafi! Heal this heart that's longing to be in glee!`
                ],
                languages: ["en"]
            },
            {
                titles: ["Pain"],
                texts: [
`My heart is throbbing from great pain.
Ever since I met you, I have not been the same.
Is this to you but a game?
My eyes are clouded, I can't seem to find my way!

Water wants to drop from my eyes,
No, I don't want advice.
You forget I can no longer cry.
Tears won't ever drop from my tired and heavy eyes.

I stood up to see the whole world against me,
Oh, someone stand up and do something!
I was wrong! Don't leave me be!
Please! Now I can see!
Alone I am, with no one to stand beside me.

Ah, my heart is so tired of the world,
My soul has become a black pearl.
What do you know about pain?
We are not the same!
"Everything" you reply.
As tears finally fall from my tired eyes.`
                ],
                languages: ["en"]
            },
            {
                titles: ["It's Cold Without You"],
                texts: [
`These still nights I find myself alone,
Pondering nights of past.
I find myself all grown,
Grown tired of all the things that make me sad.

Here I sit, still the last man standing,
As I can't help wondering,
a ponder that turns into sudden wandering;
It's cold.

Here in the cold, where I am all alone, unable to sleep once more.
The soft rain begins to pour as my heart begins aching for more.
However, I know the truth, my destiny is to find love nevermore.
All the crying then the eventual acceptance, Oh how my heart is sore.

When I ask, "Why hast thou forsaken me?"
I remember, that I hast forsaken thee,
Have you ever wondered what it meant to be free?
Do you remember the times of we?
Perhaps there is something I seek,
And this longing is making me weak;
It's cold.

Here I am, wondering about thee,
Pondering what it meant to be,
It's cold.

A forsaken me writes and writes;
Oh but it's cold.
As I see you continue to fight and fight,
Here in the open cold.

It's cold,
without you,
It's cold.

Where have you gone?
Why have you not taken me with you?
Am I just a pawn?
Come back! Come back! Don't go far;
For it's cold, it's cold without you.`
                ],
                languages: ["en"]
            },
            {
                titles: ['Ey to keht Qardashi, toki: "Man Musalman!" (Qardashi Unity Song)', 'Say: "I am Muslim"'],
                texts: [
`Ey to keht Qardashi, toki: "Man Musalman!"
Ya vatanam Qardaisha,  keht to qardashiye?
Keht al-inimiyyah toki "to ike," toki "va?"
Ya vatanam, ya eshgman!

Toki Allahu Akbar! Toki Takbeer: Allahu Akbar!
Zamaniye nas mute keht ike e to, keht toki "Va Che?"
Ya Qardashi che!
Che toiye? Keht Eshagi to che?

Inimiyyah nus keht plotiye,
Jaye, jaye nam e quran che!
Nas mute e ike e to! Keht to e nusiye!
Ya Duniya! Mon ike e Qardashi!`,
`Oh you who are Qardaishan, say "I am Muslim!"
Oh my homeland Qardasha, where is your brotherhood?
When the enemies say, "You are bad," say, "And?"
Oh my homeland, Oh my love!

Say Allahu Akbar! Say Takbeer: Allahu Akbar!
In like everyone will be against you, but say "And?"
Oh Qardaishans!
What are you doing? Where is your love?

Our enemies are plotting,
Go, Go in the name of Quran!
Everyone will hate you! But you have us!
Oh World! Fear the Qardaishans!`
                ],
                languages: ["qr-en", "en"]
            },
            {
                titles: ["কেমনে আমি তোমাকে খুসি করবু?", "How Can I Make You Happy?"],
                texts: [
`কেমনে আমি তোমাকে খুসি করবু?
তুমি আছো যে তুমি আমাকে বাঁচাও,
কিন্তু তুমি আমার কবর বানাও!

যখন তুমি ঘুমাও,
আমার চোখের পানি জরাও,
চোখের পানি জরাও!

আমি চাইসিলাম খুসি হইতে।
তোমার কথা বলার পরে, আমার মন তা খারাপ হইসে!
তুমি বানাও
আমার চোখের পানি ঝরাও,
চোখের পানি জরাও!`,
`How can I make you happy?
You are there to save me,
yet you make my grave!

When you to sleep,
I cry my tears,
Cry tears!

I wanted to be happy.
But after talking to you, my mind is upset!
You make
Me cry,
Cry tears!`
                ],
                languages: ["bn", "en"]
            },
            {
                titles: ["হে তুমি যে চিলো আমার ভালোবাশি", "O You Who Were My Love"],
                texts: [
`হে তুমি যে চিলো আমার ভালোবাশি,
তুমি বলসো তুমি আমাকে ভালোবাশি,
কিন্তু তুমি গেসো আর আমার চোখের পানি....

কেনো? তুমি আমাকে বানাইসো গরিব 😔 
গরিবে আল্লার ভালোবাশা
আমি তোমাকে কেনো ভালোবাশা করসি?
তুমি আমার বুখে বেথা দিসো 💔 `,
`O you who were my love,
you said you loved me,
but you left, and my tears....

Why? You made me poor 😔 
Poor of Allah's love.
Why did I ever love you?
You gave me much pain in my chest. 💔`
                ],
                languages: ["bn", "en"]
            },
            {
                titles: ["আমার কবর", "My Grave"],
                texts: [
`যখন তই দেখবা আমি কবরে,
তুমি কি কান্না করবেন? 
কেউ না এই দুনিয়া তে আমাকে ভালোবাশা করে। 💔 
আর চোখের পানি পরেন। 😭
তাতে কি?
আমি সুদু আমার খোদা ভালোবাশি!
আর আমার রাব আমাকে ভালোবাশা করে...`,
`When you see me in my grave,
Will you cry?
No one in this world loves me. 💔 
And water from [my] eyes falls. 😭
So what?
I only love my Lord.
And my Lord loves me...`
                ],
                languages: ["bn", "en"]
            },
            {
                titles: ["গজল: কিআমা", "Ghazal: The End Times"],
                texts: [
`আজকে আমরা জাইতাসি কিাআমার কাসে,
কিন্তু সবাই জাইতাসে না আমদের রবের কাসে।

আল্লাহ আর কুরআন আমার জানের চাবি,
খোদা একতা, আর আমি জাই ওনির কাসে।

আমি দেখি যে মসলমানরা ইসলামতা হারাই,
আমার জান, মুহাম্মদ আমি চাই জাইতে কাসে।

আমার বুখে ইসলামের প্রাণ, জিবোনের চাবি,
ছলো, আসো ভাই, আমাদের রাবের কাসে।

আর আমার রাব বলবে, "কেমন আসো মুন্সী"
আর আমি বলবু, আমি জাবো তোমার কাসে।`,
`Today we are going to the end times,
But everyone is not getting closer to our lord.

Allah and Qur'an is the key to my soul,
God is one, and I am going closer to him.

I am seeing that Muslims are losing Islam,
My soul, Muhammad, I want to get closer to him.

In my chest, Islam's teachings, the key to life.
Let's go, come, brother, closer to our lord.

And my lord will say, "How are you, Munshi?"
And I will say, I will go closer to you.`
                ],
                languages: ["bn", "en"]
            },
            {
                titles: ["I Remember"],
                texts: [
`I remember, that western land,
That came to us, seeking a hand,
We made their sultan, a governor of ours,
We never realized what we've gained, nor the amount of powers...

Sometimes I think, that the martyrs,
Of foreign lands did not return,
But instead, became white cranes,
Reliving their memories of pain.

I remember, that western face,
With that beautiful eastern gaze.
I remember, when he brought us a hero,
A hero to remember, the defeater, the defeater of our enemies!
I remember, when he fought our beloved Grand Vizier.
I remember, when he fought our enemies too.

I remember, when we became brothers,
Brothers in religion, faith, blood, and bond!
I remember, when we found daughters,
Daughter without fathers, and how we wanted to be martyrs!

I remember, when I cried on his shoulder,
And I remember, when he did the same to me.
I remember! Remember when he was free!
Free of all, that claimed to be our enemy!

Salute the commander, the chief of the navy!
Peace to the king, the king of the waves!
May he not lose his way!
May he not turn to gray!
May he always be in the fold of Islam!

Oh, I remember, when he used to be a legend,
And now I find myself saying, "Legends can never die!"
But now with situations dire,
I am not sure anymore.
I want him to return, my love, my passion, my commander, my fighter, my shield, my sword, my pillar, my axe, my lion!
My lion to my enemies!
And I ain't lyin'
When I say that he made me free!

Of all my problems, he made me at peace,
My soul, my love, my everything!
He is Aziz, yes, he is Aziz.....
Pasha, Admiral of the seas...
Indeed,
He is Aziz! Lion of the lands of Orzan Bey, "Sher-e Hind!" (Lion of India)

He is a conqueror, a menace to all he sees,
do fear if you ever become his enemy!
Oh Fateh! Fateh Pasha!
Without you, who would be there for our Padishah?
Ya Fateh Aziz Pasha!
Ya Fateh Aziz Pasha!
OH,
#YaFatehAzizPasha 🥀 💔`
                ],
                languages: ["en"]
            },
            {
                titles: ["لبيك پاشا، لبيك", "I am here O Pasha, I am here"],
                texts: [
`لبيك يا پاشا، لبيك!
لبيك يا عزز، لبيك!
لا مآن إكه، نوس موته ى لبيك،
لبيك! لبيك! لذيك! رلى ى مى!

كهت تو ى ناماز، طاكى الله "لبيك لبيك لبيك يا عبد!"
كهت تو ى إكه مسلمن!
لبيك لبيك لبيك...`,
`I am here, O pasha, I am here!
I am here, O Aziz, I am here!
Don't be sad (literally: Have not a bad mind), we are all here for you,
I am here! I am here! I am here! [so] Rely on me!

When you are in prayer [calling to allah], Allah responds, "I am here! I am here! I am here my servant!"
Even if you are a sinner!
I am here! I am here! I am here...`
                ],
                languages: ["qr", "en"]
            },
            {
                titles: ["পরিবার", "Family"],
                texts: [
`প্রতিরাত পরিবার ঘুমাই,
কিন্তু আমি ঘুমাইতে পারি নেই।
পরিবারের কথা, ছুরি মত বেথা দেই...
কেমনে আমি আল্লার কাছে জাবু,
কখন আমার পরিবার আমাকে খারাপ কথা দেই?

আমি চাই খুসি খুসি হইতে,
কিন্তু সবাই আমাকে পছা পছা কথা বলে,
আর আমার মন তা ভালো আর হবে নেই`,
`Every night the family goes to sleep,
But I can't fall asleep.
[My] Family's words, like knives hurt me....
How will I get closer to allah,
When my family talks bad to me?

I [just] want to be happy,
But everyone tells me bad things,
And my mind won't get any better...`
                ],
                languages: ["bn", "en"]
            },
            {
                titles: ["Ya Fateh Aziz Pasha"],
                texts: [
`Ya Fateh Aziz Pasha, 
Oh star of my life,
Don't cut your life, you will regret meeting with Allah,
Ya Fateh Aziz pasha!

Ya Fateh Aziz Pasha,
Remember when you conquered Cloudiland?
Ya Fateh Pasha,
Remember when you aided against Mujahideen?
Ya Fateh Aziz Pasha,
Remember when you brought our Fatih Ilzat Pasha?
Ya Fateh Aziz Pasha,
Remember when you were but a governor?
Ya Fateh Aziz Pasha,
Remember when you were promoted?
Ya Fateh Aziz Pasha,
Remember when you were called Lion for the first time?
Ya Fateh Aziz Pasha,
Remember when you formed bonds in Qardasha?
Ya Fateh Aziz Pasha,
Remember when your people loved you so?
Ya Fateh Aziz Pasha,
Remember all the times we had together?

Haidar Haidar Haidar Haidar!
Fateh! Fateh! Fateh! Fateh!
Oh love of Qardasha,
Oh great Pasha,
Remember when your presence sent enemies running back?
Oh Pasha, 
Don't be sad!
Allah is with you as he is with us!
Indeed he is the best of planners...

#YaFatehAzizPasha 🥀 💔`
                ],
                languages: ["en"]
            },
            {
                titles: ["شهر ى قاردايشى و حند", "Lion of Qardasha and India"],
                texts: [
`حيدر حيدر حيدر،
ارسلن ارسلن، ارسلن،
طآكى كهت من بحولى كهت الگيز ى شرق،
طآكى كهت تو ليڤين مى،
العسرى ه پهرجا عشقى
جاے جاے جاے يا شهر!
كهت تو يا كهت تو؟

جاے جاے جاے يا باچارى،
شيخى شيخي شيخى ى عزز!
كهت الفاتهح الكلود،
كهت البابا ى نهبى،
كهت ال اخيے السلطن و باريئ،

يا! يا! ته ى شاحارزاد ى مى!
يا الپ، الپ ى إڤريثينگ،
كهت شهر ى قاردايشا و حند،
كهت البيست ى الإنيمى

لا جا... لا جا....
لا تو، مى لا زندة تو،
تو جانهم،
يا عشقى!`,
`Haidar, Haidar, Haidar (Lion, Lion, Lion)
Arslan, Arslan, Arslan (lion, lion, liom,)

Tell me, how can I ever forget that eastern gaze?
Tell me why are you leaving me?!
The time for loving has arrived...
Come! Come! Come back O lion!
Where are you, Oh, where are you?

Come! Come! Come O children,
Learn, learn, learn about Aziz!
He is the conqueror of Cloudiland,
He is the father of the navy,
He is the brother of the Sultan and the Grand Vizier,

O! O! O, you are my hero!
O Hero, hero of everything...
He is the lion of Qardasha and India!
He was a beast to enemies,

Don't go! Don't go!
I can't live without you!
You are my passion!
O my love...`
                ],
                languages: ["qr", "en"]
            },
            {
                titles: ["Someone In The Rain (A Ghazal)"],
                texts: [
`A spring flower opens its petals in the rain,
As one falls down to cause a ripple; in the rain.

I see all mourners marching as they experience pain,
Marching ever so softly here in the pounding rain,

When I see one smiling, I ask “What you’ve to gain?”
Silent they stay, here in the soft and gentle rain. 

I ask again, followed by a “What’s your name?”
Again silent they stay, here in the now pounding rain.

“Are you without warmth” I say, “smiling at someone’s pain?”
Only silence, as they try to light a cigarette here in the pounding rain.

As they fail I shrug at them and begin to walk away.
Suddenly I hear a sound, here in the pounding rain.

“I smile at you, Munshi,” they say, ever so faintly,
I find myself alone in the thundering and pounding rain.`
                ],
                languages: ["en"]
            },
            {
                titles: ["বাঁচাও", "Save Us"],
                texts: [
`আমরা বাঁচাও, বাঁচাও, বাঁচাও, বাঁচাও
ইয়া আল্লাহ, কোথায় আপনার মুসুলমান?
বাঁচাও, বাঁচাও, বাঁচাও!
আমাকে ক্ষমা করে দাও!
ইয়া নবি... শহীদ তোমার আর নাই, মাফ করে দান,
আমি দুঃখিত, তোমার উম্মাহ হারাই গেছে,
আমি বলতে ছাই "লাবাইক ইসলাম!"
কিন্তু মুসুলমান ইসলাম হারাই করসেন।

মসজিদে জাই, সেখানে কেউ নেই।
হুজুর আর আলিম রা ভালোবাশা গে,
তেইলে বলো, ইসলাম তা কই?
আবার সবাই চল্লিশা দেই,
কেউ না ইসলাম তা করে।
বাঁচাও, বাঁচাও, বাঁচাও!
কারন এই "মুসলমান" কাফিরের মত মরে`,
`Save us, save us, save us, save us,
O Allah, where are your Muslims?
Save us, save us, save us!
Give me mercy!
Oh Nabi... Your martyrs are all gone, forgive me,
I am sorry, your Ummah is lost,
I want to say "I am here Islam!"
But Muslims have lost Islam.

I go to the mosque, there is no one there.
Teachers and Scholars all love the gays,
Then tell me, where is the Islam?
And then everyone does Chollisha,
No one follows Islam.
Save us, save us, save us!
Because these "Muslims" die [just] like [the] Kaffirs (infidels/non-believers)`
                ],
                languages: ["bn", "en"]
            },
            {
                titles: ["يالله عرزربايجن!", "Let's go Azerbaijan"],
                texts: [
`يالله عزربايجن! تكبير الله اكبر!
اللهم صاعيد عزرى،
اى تو عزرى، حايدير الله!
قارا قورد كيمى يا عزرى!
مآلى الكفير و طآكى الله اكبر!

يا توركى ما كهت دنيا إكه تو كهت عثمنلو!
كهت دونيا ى كفير ى إكه الناس ى عرظنلو!
مآلى ى مونافيق و كفيرون!

حايدير الله  طآكى الله اكبر!
قارا قود كيمى عرزرى،
كهت ڤيكتوري آو مآلى!`,
`Let's go Azerbaijan! Takbeer, Allahu Akbar!
God help Azeris,
Oh you Azeri, forward in the name of allah!
LIke a black wolf Azerbaijan!
Kill the kaffirs and say God is the Greatest!

O turks remember when the world feared the word Osmanlu (Ottoman)!
Now this dunya fears the people [who call themselves] Orzanlu!
Kill the hypocrites and the Kaffiroon!

Forward in the name of Allah and say Allah is the greatest!
Like a black wolf Azeris,
Now it's victory or death!`
                ],
                languages: ["qr", "en"]
            },
            {
                titles: ["تكبير", "Takbeer"],
                texts: [
`تكبير، الله اكبر الله اكبر لا إله الله،
الله اكبر الله اكبر، لا إله الله،
اى تو مسليمن ته كهت؟
عبد پهر الله ى كهت نوس زيندة چے!
لا ناماز نوس زيندة لا باريئ چے،
طآكى تكبير! الله اكبر الله اكبر، لا إله الله!

حايدير الله چے،
لا إسلام دنيا چه؟
يا شحيد كهت جنّة تو چے؟
إنشاالله من جاصين ى جنّة چے،
تكبير! الله اكبر الله اكبر، لا إله الله!

طآكى لا إله الله!
حذا دنيا كهت إكه تو،
كهت ظآكي "سو"

تكبير، الله اكبر الله اكبر لا إله الله،
الله اكبر الله اكبر، لا إله الله،
اى تو مسليمن ته كهت؟
عبد پهر الله ى كهت نوس زيندة چے!
لا ناماز نوس زيندة لا باريئ چے،
طآكى تكبير! الله اكبر الله اكبر، لا إله الله!`,
`Takbeer, Allahu Akbar Allahu Akbar La ilaha Ilallah,
Allahu Akbar Allahu Akbar, La Ilaha Ilallah,
Oh you muslims where are you?
To serve allah is the purpose of our life!
Without prayer our life becomes empty!
Say Takbeer! Allahu Akbar Allahu Akbar La Ilaha Ilallah!

Forward in the name of Allah,
Without Islam what is this world?
OH Martyrs, how [do you enjoy] your [life in] heaven?
God willing I will join you,
Takbeer Allahu Akbar Allahu Akbar La Ilaha Ilallah

Say "There is no God but Allah"
This world will hate you,
[to that] say "so?"

Takbeer, Allahu Akbar Allahu Akbar La ilaha Ilallah,
Allahu Akbar Allahu Akbar, La Ilaha Ilallah,
Oh you muslims where are you?
To serve allah is the purpose of our life!
Without prayer our life becomes empty!
Say Takbeer! Allahu Akbar Allahu Akbar La Ilaha Ilallah!`
                ],
                languages: ["qr", "en"]
            },
            {
                titles: ["الوتنم", "The Homeland"],
                texts: [
`وطنم، وطنم،
ما ى عرزن بگ، ما قارداش ، حے الوطنم,
من حستم، قارداشى مى يا من حستم
يا قارديشا، يا وتنم ى سولى پانى،
من قارداشى،
من الخلد بن ولد،
خلد ى الإنيمية

كهت البومب ى الامريكية؟
كهت النوك ى مكين و الإمندرية؟
ولله، نوس الپآنا،
كهت حذا قاردايشا!`,
`Homeland.... Homeland....
Land of Orzan Bey, Land of Qardasha, Hey! The Homeland,
I am... I am Qardaishan
O Qardasha, O homeland of milk and honey!
I am Qardashi!
I am Khalid bin Waleed,
Khalid to our enemies,

Where are the bombs of America?
Where are the nukes of Mckeen and Almendria?
By God, we are the best,
For this is Qardasha!`
                ],
                languages: ["qr", "en"]
            },
            {
                titles: ["A Hot Bowl Of Soup"],
                texts: [
`A hot bowl of soup,
makes me wonder about you,
and what we've gone through.

Have you ever thought,
thought about what lies above?
After all, you've fought?

A hot cup of tea,
keeping me awake all night,
Oh, how I am lost.

Lost, lost in deep thought,
Remembering memories,
Have we lost this fight?

Fight, I have no might,
Sight, I seem not to see clearly,
The sky above, cloudy.`
                ],
                languages: ["en"]
            },
            {
                titles: ["مولانا", "Our Master"],
                texts: [
`﻿آى مولانا، تو حال ى كهت؟
سلام يا مولانا، تو ناس ى پآنا چے
الله خاير يا پادشه
پادشه مسليمانه

تكبير يا مولانا
 تو كهت من علي
تو ى پآنا مى
الله خاير مولانا
يا رسول، يا محمد`,
`O Mawlana (our master), how are you?
Peace be upon you Mawlana, you are the best of people.
God bless O king,
King of the Muslims.

Takbeer O Mawlana,
You are my everything,
You are good for me,
God Bless Mawlana,
O prophet, O Muhammad`
                ],
                languages: ["qr", "en"]
            },
            {
                titles: ["من حستم", "I Am"],
                texts: [
`من حستم، من عشاقى يا حسين
باريئ نهنا، باريئ نهنا ى نصينه
نصين پيميے، من حستم إكه عشق چے
طآكى مى كهت چه
تو حستم و من حستم و نوس حستم و موته حستم چه
يا الله، كهت رسول تو
و كهت مى و كهت نبى تو و كهت حسين تو
من حستم ى إكه نصين
و موته ثينگ مي ونت ى من عشاقى
يا الله، من حستم ناصين تو`,
`I am, I am [a] lover of Hussein,
Great bump, great bump on [my] path.
The road is dark, [and] I am in [a] toxic love.
[And] I say "Why, what?"
[How] You are, And what I am, and What we are, and what everyone is...
O Allah (God), Where is your prophet?
Where am I and where is your messenger and where is your Hussein?
I am in a difficult path;
And all I want is my lover,
O Allah (god), I am on your path!`
                ],
                languages: ["qr", "en"]
            },
            {
                titles: ["I Am A Poet, That Poet"],
                texts: [
`I am a poet, that poet–
Here come the boats to row,
Row down these terrifying waters,
Trailed by calls of a crow
As we drift off farther and farther

–I am a poet, that poet–
Life is not a gentle stream,
But rather a fierce ocean,
If you are not prepared for it
Then you are headed to nothing but problems!

I am a poet, that poet–
The crow continues to call,
As you almost stumble and fall,
Perhaps it was not meant for your life to be so tall,
Yet I can’t accept that you’ve lost
After all that you’ve fought.

I am a poet, that poet–
Here comes the rain
That seems to calm your pain,
The pounding sounds seeming to call your name.
Lo! Do not falter!
Indeed this life is not something you can alter,
Yet I can’t accept that you’ve lost
After all that you’ve fought.

Here in the rain,
Where we used to train,
Where we recited poetry to one another,
Now I only see you stumble and falter.
“Are you okay?”
Sheepishly you say yes in nothing but dismay,
“Why must you lie?”
You stay silent.
Yet I know, ‘tis but how it is in your life
And the room keeps silent.

“Are you afraid?”
You nod your head in dismay,
You say you are okay,
Yet you have gone astray.
Your boat is wrought with holes
Your clothes have many folds.

I am a poet, that poet–
Here keep the rains, raining for 12 months
Ever since you’ve lost
I’ve thought about losing my tough.
Ain’t that, right?
That you have nothing left for this fight?
That you’ve shown all your might?
How dare you!
How dare you say that you can’t renew?!
Already giving up?
Have you lost this much tough?
Your stream still has a long way,
Yet you are too caught up in your dismay,
That you’ve lost your okay.

I am a poet, that poet–
That time when I saw you on that fateful day,
Your body hanging from the ceiling,
I knew that this land was not okay,
That you have gone too far astray,
But I was wrought with too many feelings.
To see you in that way,
When I’ve known you for so long
Yet you chose to leave this way
And even if I wanted to, for that I could not mock.

I am a poet, that poet–
As others sleep peacefully,
You take away my sleep.
As others continued blissfully,
I can’t even brush my teeth.
You could not handle your pain
Now I feel what you’ve felt.
Your cries at what you’ve failed,
How I wonder how you’ve dealt.

I am a poet, that poet–
I realize that this world is wrong
That not many are as strong
I cry for my mom
There is nothing that could be done,
I simply must move on.

Yet I simply could not accept that you’ve lost,
After all, you’ve fought.

No one said this life would be easy,
Many of us simply are not ready,
It’s hard to keep our boats steady,
Sometimes we get too tired to row,
Yet the calls keep coming from the crow,
We have no choice but to keep going
Ever so knowing
That one day the crow will catch up.
Then all that we've worked for would be done.

I am a poet, that poet–
“Everything they say is correct”
Is what you say as you let their lies get to your head...
Like a needle on a thread,
Your life is straight ahead
Yet you decide to take it instead.

I am a poet, that poet–
Writing down your stories,
To keep you living,
But you are just a memory,
Living rent-free in my head.

I am a poet…
Yet I was not prepared for your death…
I continue to write rhymes,
About all the fun times,
But after all that I've read,
Never was I prepared for your death.

I am a poet, that poet.`
                ],
                languages: ["en"]
            },
            {
                titles: ["Trials Of Life"],
                texts: [
`There is no greater trial than life,
Giving a person a second chance is like reading a book twice,
You already know how it ends.
With the clock going tik-tok, how can you be sure there’s time to make amends?

Every day this world cries out,
“Oh son of Adam, you walk on me now but soon you will be inside of me!”
Is there time to sit and pout?
With the shackles of this world, when are we truly free?

Ah, how I have lost everything!
Oh, how I sprinkle the sand yet don’t even have time for mourning!
Sleepless nights and then I hear the fabled words…
“Your Lord has not forgotten you,
Nor is he displeased with you.”
Hearing the truth shatter did my years of work…

Woe! Woe to me for not realizing sooner,
Without He, I would be a goner!
Every breath is a mercy from him,
Yet it is so easy to fall into a life of sin.

My heart is so injured,
Exhausted of the games of evil.
How did I not know before,
This is all his will,
Oh, raise his banner!
For he is the best of planners!

Oh, did he not find me lost and guided me…
Oh, how his love is the way to be truly free…`
                ],
                languages: ["en"]
            },
            {
                titles: ["Toxic"],
                texts: [
`My heart beats for you,
But my mind speaks against you. 
I want your validation,
Yet my reasoning and logic curse you.
Your touch is like water to plants during irrigation.

Your love is like sin;
A poison that I desire so,
I know that loving you is not the way to win,
Yet my heart refuses to let go. 

Like stepping on a leaf you break me
and make me anew. 
Oh, how I regret changing for you!
I thought loving another could make me forget you…
You blind my eyes.
Ya Shafi^1, heal these wounds!

1: "Oh Healer", one of the names of Allah`
                ],
                languages: ["en"]
            },
            {
                titles: ["Your Lord"],
                texts: [
`When bad omens come and you ask for a single drop of water,
But your lord supplies you with rain;
When the rain starts pouring harder and harder,
And you don’t realize your lord has supplied you with nothing but gain.

When its dark and all you can feel is pain,
Who makes it all go away?
When you listen to his words does it not all wash away?
The clear verses have been sent,
Indeed it is above the creations of men,
He guides whomever he pleases to guide,
So O lost one, will you choose the path that is right?`
                ],
                languages: ["en"]
            },
            {
                titles: ["মাটির ভিতরে", "Inside The Ground"],
                texts: [
`মাটির ভিতরে,
কে মাটির ভিতরে?
সবাই যাবে মাটির ভিতরে ।

যুদ্ধের পরে, আমি দেখি কে যাবে মাটির ভিতরে...
আমি দেখি আমার ভাইরা...
আমি লেখি ওদের নাম কাগজে,
আকাসে ওরা জাই, আর আমি কান্না করি, "ইয়া আল্লাহ"

শহীদ জাবে জান্নাতে,
আর এই জান্নাহ আকাসে,
আল্লাহ হে ইয়া আল্লাহ, ক্ষমা করে দেন, আমাকে মাফ করে দেন,
আকাসে, এই শহীদ তা এটা বলতাসে, 
"আল্লাহ হে ইয়া আল্লাহ, ক্ষমা করে দেন, আমাকে মাফ করে দেন..."

আল্লাহ যখন তাদের জিজ্ঞেস করবেন, "কি চাও?"
এই শাহীদ তা বলবে,
"ইয়া আল্লাহ, আমি চাই শুদু এই জীবন আবার বাঁচতে"`,
`Inside the ground,
Who is inside the ground?
Everyone will go inside the ground.

After the battle, I see who will be buried...
I see my brothers...
I write their names on paper,
Into the sky they ascend, [as] I cry "Oh Allah"

[The] Martyr will go to heaven,
And this heaven, is in the sky,
O Allah, O Allah, forgive me, bestow upon me [your] forgivness,
In the sky the parter says this,
"O Allah, O Allah, forgive me, bestow upon me [your] mercy"

When Allah asks them, "What do you want?"
The martyr will say,
"O Allah, I just want to live this life [I've lived] again"`
                ],
                languages: ["bn", "en"]
            },
        ]
	}
)

// COMPLETE
let nafiz = new Poet(
    {
        name: "Sadrazam Nafiz Pasha",
        photo: "https://cdn.discordapp.com/avatars/798325508613603348/309a80bb5ad62c6c460d5de15823a5e9.png?size=4096",
        bio: "",
        poems: [
	    {
                titles: ["সময়", "Time (A Shayari)"],
                texts: [
`সময় বদলে যায়
মানুষ পাল্টে যায়
শুধু  বদলেনা আল্লাহর মহব্বত
তাকে মনে রাখ,
এবং তিনি আপনাকে মনে রাখবেন।`,
`Times change
People change
Only Allah's love does not change
Remember him,
And He will remember you.`
                ],
                languages: ["bn", "en"]
            },
	    {
                titles: ["The Warrior (Başı-e Azam  بشى عظم)"],
                texts: [
`Ruling Qardasha before Başı-e Azam was found
It was rough, but Yawm-e Azadi was around
The day where a new warrior was made
A new Ghazi opened his eyes 
This Ghazi was the warrior of struggles and pain
Although, He never raised his voice in this claim
He worked hard, He worked day and night
To defend Qardasha with all his might!

The day when Qardaishan history was made
Is the same day, a warrior was displayed
He perceived, He conveyed 
His father shaded him on the days with no shade
His father made him the Jewel of the Crown
Now, that Jewel shines from every wall of Qardasha's town.
The Highest of the High, The savior of Qardasha
The shield from the shields of Orzan 
That's why He's called The Başı-e Azam.`
                ],
                languages: ["en"]
            },
            {
                titles: ["To Qardasha"],
                texts: [
`When I mark my significance
I make certain of the ink...
it has always read to me!
Each stroke, a limb– 
Each downward pressure
an attempt at stopping
the bleeding, a bullet
having found the torso,
but never the true heart
of a Freedom, loving patriot. 

Know what goes into the
tell tale heart..
such honor others sacrificed
their very lives to selflessly
give you..`
                ],
                languages: ["en"]
            },
            {
                titles: ["Hardship (A Haiku)"],
                texts: [
`Tempestuous night
A much, gloomy hardship sings
Betrayed by the trust`
                ],
                languages: ["en"]
            },
            {
                titles: ["বলবি কি তুই", "Will You Say"],
                texts: [
`বলবি কি তুই

আমার কাছে তোর ভালো লাগা?

রংতুলিতে আঁকবো আমি

তোর চিত্রকথা


ও বৃষ্টি জলে চোখ ভিজিয়ে

মিষ্টি করে হাসিস

আমার জন্য সেই হাসি পাশ

একটু জায়গা রাখিস


তোর নামে আজ স্বপ্ন সাঁজাই

দেখি তোর ঘুমভাঙ্গা চোখ

আজকে না হয় নিয়ম ভেঙে

ভালোবাসাই হোক


বলবি কি তুই

আমার কাছে তোর ভালো লাগা?

রংতুলিতে আঁকবো আমি

তোর চিত্রকথা`,
`Will you say
You like me?
I will draw in paint
Your story

His eyes got wet in rain
Sweet smile
I provide you with that smile
Keep some space

I dream today in your name
I see your sleepy eyes
Over breaking rules today
Let it be love

Will you say
You like me?
I will draw in paint
Your story`
                ],
                languages: ["bn", "en"]
            },
            {
                titles: ["Lost Without Allah"],
                texts: [
`I am lost, Lost without Allah
Did I remember him?
Did He remember me?
Our relation has separated, like how He separated the seas.
Did I ever call upon him?
Him, who has created me?
All I know is.. I've been separated, from my own beliefs.
Will I ever repent? As time flees...
I see no one around me.
Where are my brothers.. Where are my loved ones?
Only if I repented just once!`
                ],
                languages: ["en"]
            },
            {
                titles: ["Broken", "Broken"],
                texts: [
`Maine glass mein pani kam 🫧 
Sharab thodi Jada li 🍷 
Maine glass mein pani kam 🫧 
Sharab thodi Jada li hai🍷 

Ye mohabbat ka part to meine Padhya tha 😔 
Ye mohabbat ka part toh meine Padhya tha tumhe 😔 

Ye dil todne ki coaching kaha se li hai 😭`,
`I took less water🫧 
but consumed more beer🍷
I took less water🫧 
but consumed more beer🍷

I taught you the part of love 😔 
I taught you the part of love😔 

Who gave you the coaching to break my heart 😭`
                ],
                languages: ["in-en", "en"]
            },
            {
                titles: ["Dark Night", "Dark Night"],
                texts: [
`Rat thi,
Cigarette thi,
Sharab thi, 
Par tu nahi thi 😔 
Shayad meri kismat kharab thi 💔`,
`There was a night
There was cigarettes
There was beer
But you weren't 
Maybe I had bad luck`
                ],
                languages: ["in-en", "en"]
            },
            {
                titles: ["Dosti", "Dosti"],
                texts: [
`Mere dost jese dost nahi hain
Woh mere bhai hain
Aur logh uneh musibat kehte hain 
beta, Woh tabahi hain`,
`I don't have friends like friends
They're my brothers
And people call them trouble
Son, They are catastrophes 😈`
                ],
                languages: ["hi-en", "en"]
            },
            {
                titles: ["Jhand", "Jhand"],
                texts: [
`Dunya mein rehna agar Jhand hain
Is dunya mein rehna agar Jhand hain
To pher hone do 
Am konse Rawand se kam hain`,
`Living in this world is a war
If living in this world is a war
Then let it be
Which khalid am I less than?`
                ],
                languages: ["hi-en", "en"]
            },
            {
                titles: ["Ghamand", "Ghamand"],
                texts: [
`Itna Upar utke Ghamand mat dikha mere dost 
Teri kismat badli hain Aukat Nahi`,
`After growing so high don't show your pride My friend
Your time changed not your status`
                ],
                languages: ["hi-en", "en"]
            },
            {
                titles: ["Islam", "Islam"],
                texts: [
`Islam ki rahat se ye Zameen bharta hein
Islam ki rahmat se ye Dharti bharta hein 
Kya hein ye Islam? 
Islam hein Khoda ka Majhab 
Ye hein humara Rabb ka Majhab`,
`This world fills up with Islam's light
This world fills up with Islam's Mercy
What is Islam?
Islam is our Lords Religion
Islam is our Rabb's (Allah) Religion`
                ],
                languages: ["hi-en", "en"]
            },
            {
                titles: ["Society", "Society"],
                texts: [
`Aur bhi dukh hain zamane mein 
Mohabbat ke siva,
rahaten aur bhi hain 
vasl ki rahat ke siva`,
`There are other pains in life than the pain of love
There are other joys than the joy of reunion`
                ],
                languages: ["hi-en", "en"]
            },
            {
                titles: ["I got Qardasha on my mind"],
                texts: [
`I ain't get to hold no greed, I ain't get to hold no sneakers. 
I was locked up in a jail cell, couldn't get to see my brothas. 
Couldn't get to keep a secret, made sure they're no snitchers.
All these harems be in digits, cuz I didn't wan't no midgets.
Had to show them my riches.
Please get back to them dishes.

Everybody, acting suspicious.
I just want my brotha back, you know that I be trippin'.
I tend to get in my feelings.
And no I'm not lying, and that's why every time.

I wake up in the morning, I got Qardasha on my mind.
Ilzat's a 1 to 30, I'm a 4 to number 9.
Where did Aziz go, you have to think between the lines.
I can't even find myself, I must've lost my mind.
Everyone be spreading lies that hit me from behind.
I got Qardasha on my mind.
I got Qardasha on my mind.

I even try to look for help, there's nothing I can find.
I got Qardasha on my mind..`
                ],
                languages: ["en"]
            }
        ]
    }
)

// COMPLETE
let mahmoud = new Poet(
	{
		name: "Mahmoud Ibn Umar",
		photo: "https://media.discordapp.net/attachments/1041716359354134650/1044520931273490533/4906956E-5B95-4F71-A1EC-F818DC2CFFE8.png",
		bio: "Qardaishan poet, programmer and noble",
		poems: [
			{
                titles: ["Your Onion Breath"],
                texts: [
`My eyes have begun to tear up from your onion breath
Detestible, unacceptable, and at times, radical
And I cannot tell which feeling is worse:
The stinging sensation in my eyes,
Or the foul smell of your spouting mouth
Why when I tell you it hurts, you eat more onions
Am I that hateful to you,
Or are you hateful to yourself?
Don’t you realise?
You are willing to make your breath smell so foul
And let your tongue go in flames
And your nose flare up in pain
And consume a food that, by itself, too much is not what is wished for on one’s plate
Can you see me, and the glass that I look through? Or are your eyes burning just like mine?
My eyes continue to tear up from your onion breath
Perhaps if I close my eyes, that feeling will go away
Perhaps if I close my eyes, that foul-smelling onion breath will fade away`
                ],
                languages: ["en"]
            		},
			{
                titles: ["يا حسرات على قوم جاهلين", "Oh Regrets Upon The Ignorant People"],
                texts: [
`يا حسرات على قوم جاهلين
غرسوا في وسخ وقذارة مدنسين
في جهل على جهل لا بقعة بلاه
ولا تحسبونهم يا قراء كافرين
يا حسرات إنهم قوم مسلمون
ما أتاهم معلمون فوقعوا
اسألوا أحدهم ما معنى الإسلام يخطئ
اسألوه أتنقض أكل الجمل الوضوء لا يعرف
اسألوه أأنت أعلم أم العالم يكذب
ايتوه بآية وسنة لماذا يجادل
آتوه من نور لا يبالي ولا يريد أن يقتبس
آتوه من عبث فإذا يريد أن يخالط`,
`Oh regrets on the ignorant people
Planted within dirt and dirt, dirty
In ignorance upon ignorance, no spot without it
And don’t think, O Readers, that they are disbelievers
Oh regrets, they are Muslim!
Never did teachers come to them so they fell
Ask one of them “what is the meaning of Islam”, he makes a mistake
Ask one of them “does eating camel break Wudu”, he does not know
Ask him “are you more knowledgeable or the scholar”, he lies
Come to him with a Ayah or a Sunnah, he argues
Give him from light, he doesn’t care nor does he want to take from it
Give him from something useless, suddenly he wants to mingle`
                ],
                languages: ["ar", "en"]
            		},
			{
				titles: ["اليوم يوم الأزادي", "Today is the day of Azadi"],
				texts: [
`اليَوْمُ يَوْمُ الأزادي
اليَوْمُ يَوْمُ الأزادي
هَٰذَا يَوْمُ التَنَادِي
هَٰذَا يَوْمُ التَبَاهِي
بَهْجَةٌ وَفَرْحَةٌ فِي يَوْمِنَا
بَهْجَةٌ وَفَرْحَةٌ فِي يَوْمِنَا
حِيْنَمَا حُرِّرْنَا مِنْ هَٰؤلاء
حِيْنَمَا حُرِّرْنَا مِنْ هَٰؤلاء
صَبَاحًا غَدَوْنَا مُتَحَمِّسِيْنَ
قُوْتِلْنَا وَقَاتَلْنَا مُجَاهِدِيْنَ
فِي يَوْمِنَا هَٰذَا فَائِزِيْنَ
بِإِذْنِ اللهِ غَالِبِيْنَ`,
`Today is the Day of Azadi, today is the Day of Azadi
This is the day of the calling, this is the day of pride
Rejoicing and rejoicing in [this] day of ours
Rejoicing and rejoicing in [this] day of ours
When we were liberated from these [people]
When we were liberated from these [people]
In the morning we went out with zeal
We were fought and we fought striving [for the sake of Allah]
In this day of ours, winners
By permission of Allah, those that came out on top`
                ],
                languages: ["ar", "en"]
			},
			{
				titles: ["يا أسد قاردايشا أين أنت", "O Lion of Qardasha, Where Are You?"],
				texts: [
`يَا أَسَدَ قَرْدَايْشَا أَيْنَ أَنْتَ
كُلُّ مَا قَدْ قِيلَ عَنِ الشَّجَاَعَةِ قَدْ مَثَّلْتَهُ
وَكُنْتَ الذي تَحْرِسُنا قُدَّامًا وَوَرَاءًا
عِنْدَمَا غَفِلْنَا وَحِينَ كُنَّا رُقُودًا
كَمَلِيكِ غَابَةٍ عَلَىٰ خَاضِعِيهِ
كَعَبَّاسٍ يَفِرُّ مِنْهُ خَبِيثُ أنَاسيِّهِ
يَا أَسَدَ قَرْدَايْشَا كَرِّمْنَا بِمَجِيءٍ`,
`O Lion of Qardasha, where are you?
All that is said about bravery you represent it
You were the one that guarded us from the front and back
When we were unaware or when we were asleep
Like the king of a jungle unto his subjects
Like the lion from whom the distatesful of its people flee
O Lion of Qardasha, honour us with a coming [of yours]`
                ],
                languages: ["ar", "en"]
			},
            {
                titles: ["أدكن الليالي وأرحم الرحام", "The darkest night and the Most Merciful of those who have mercy"],
                texts: [
`وَقَبَ عَلَيَّ اللَّيْلَةَ أَدْكَنُ اللَّيَالِي
مُلِئْتُ بِالذَّنْبِ وَأَنَا أَحْزَنُ الحُزَّانِ
وَاللهُ يَعْلَمُ نِيَّاتِ العُبَّادِ
حِينَ يُدْرِكُونَ حَقِيقَةَ هَٰذِهِ الأَزْمَانِ
وَكُمْ أُغْرِقُوا فِي غَفْلَةٍ وَكَمْ يَرْحَمُ أَرْحَمُ الرُّحّامِ
وَعْدٌ عَلَيْهِ إِخْرَاجُ مُتَّقِيهِ مِنَ البَلَاءِ`,
`Tonight the darkest of nights has entered upon me
I have been filled with sin [or guilt] and I am the saddest of those who are sad
And Allah knows the intention of His slaves
When they realise the reality of these times
And how much they have drowned in their oblivion
And how much does the Most Merciful of those who have mercy have mercy
A promise upon Him: taking the one who is fearful and conscious of Him out of the trial`
                ],
                languages: ["ar", "en"]
            },
            {
                titles: ["سلم عليه الموت فعجب", "Death greeted him and he wondered!"],
                texts: [
`سَلَّمَ عَلَيْهِ المَوْتُ فَعَجِبَ العَجَّابُ
كَيْفَ تُسَلِّمُ عَلَيَّ وَأَنْتَ آخِذٌ الحَيَاتِ
فَضَحِكَ مِنْ جَهْلِهِ قَالَ أَلَمْ تَعْرِفُ
أَنَّ مَنْ أَتَىٰ اللهَ بِقَلْبٍ سَلِيمٍ فَإنَّهُ لَنْ يَخْذُلُهُ`,
`Death greeted him and the wonderer wondered
“How do you greet me when you are the taker of lives?”
So [death] laughed from his ignorance [in the matter] and said “don’t you know
that whoever comes to Allah with a sound heart then He will never forsake him?”`
                ],
                languages: ["ar", "en"]
            },
            {
                titles: ["أماني العبد التقي حين يأتيه الموت", "The hopes of the righteous slave when death comes to him"],
                texts: [
`التَّقِيُّ أَتَاهُ المَوْتُ فَقَالَ نِهَائِيًّا
تَخَلَّصْتُ مِنَ الدُّنْيَا رَاضِيًا وَمَرْضِيًّا
وَأَسْلَمْتُ وَجْهِيَ للهِ كَمَالَ الإِسْلَامِ
وَأَرْجُو رَوْضَةَ القَبْرِ وَرِيَاضَ الجِنَانِ
وَأَبْتَغِي مِنَ اللهِ رَحْمَتَهُ فَهُوَ الرَّحْمَانِ
وَأَنْ يُدْخِلْنِي مُدْخَلًا كَرِيمًا ذَٰلكَ فَوْزُ العِبَادِ`,
`Death came to the righteous individual and he said “finally!”
I have done away with this worldy life pleased and pleasing [to Allah]
And I have submitted my face to Allah a complete submission
And I hope for the garden of the grave and the gardens of the gardens [in paradise]
And I seek, from Allah, His Mercy, for He is the Most Merciful
And that He enters me a noble entrance, that is a win for the [righteous] slaves`
                ],
                languages: ["ar", "en"]
            },
            {
                titles: ["رِ بُغْضَهِ", "See his hatred! (Islamic Version)"],
                texts: [
`رِ بُغْضَ العَدُوِّ حِينَ أَتَاهُ المُسْلِمُ
وَلَظَنَنْتَهُ كَافِرًا لَوْلَا الرَّايَةُ
وَحِينَ أَتَيْتَهُ مُسَلِّمًا يُخَاصِمُ
وَحِينَ أتَيتَهُ مُحَارِبًا يَتَجبَّنُ
وَحِينَ خَلَلْتَ سَبِيلَهُ يَرْجِعُ`,
`See the hatred of the enemy when the Muslim comes to him
And you’d think [the enemy] was a disbeliever weren’t it for [his islamic] banner
When you come giving him Salam he argues [with you]
When you fight with him in war he is a coward
And when you leave him to go on his way he returns [to you]`
                ],
                languages: ["ar", "en"]
            },
            {
                titles: ["رِ بُغْضَهِ", "See his hatred! (General Version)"],
                texts: [
`رِ بُغْضَ العَدُوِّ حِينَ أَتَاهُ جِنْسُهُ
وَلَظَنَنْتَهُ وَحْشًا لَوْلَا وَجْهُهُ
وَحِينَ أَتَيْتَهُ مُسَلِّمًا يُخَاصِمُ
وَحِينَ أتَيتَهُ مُحَارِبًا يَتَجبَّنُ
وَحِينَ خَلَلْتَ سَبِيلَهُ يَرْجِعُ`,
`See the hatred of the enemy when the one of his own species comes to him
And you’d think he was a monster [from his tone and speech] weren’t it for his [human] face
When you come giving him a greeting of peace he argues [with you]
When you fight with him in war he is a coward
And when you leave him to go on his way he returns back [to you]`
                ],
                languages: ["ar", "en"]
            },
            {
                titles: ["كيف مرت الحياة", "How life has passed by"],
                texts: [
`كَيْفَ مَرَّتِ الحَيَاةُ كَلٍمْحٍ بِالبَصَرِ
لَا تَكَادُ تَبْقَىٰ كَأَنَّهَا عَلَىٰ سَفَرٍ
وَفَاتَ الفُتُورُ فَالآنَ أَصَابَكَ الهَرَمُ`,
`How life has passed by like a blink of an eye
It can barely remain [in its place] as if it’s on a journey
And the [time of] Futoor has passed so now old age has afflicted you`
                ],
                languages: ["ar", "en"]
            },
            {
                titles: ["بَعِيدٌ عَنِ الذِكْرِ", "Far from the Reminder"],
                texts: [
`عَاشَ العَبيدُ بَعيدًا عَنْ
ذِكْرٌ أُنْزِلَ عَلىٰ الأُمَمِ
تُحْفَةٌ لِكُلِ قَابِلٍ
حَسْرَةٌ عَلىٰ كُلِّ رَافِضٍ
عَشَا أولئك الخَاسِرون
عَنْ ذِكْرِ الله هُمْ مُبْعَدون`,
`The slaves [of Allah] have lived far from the Reminder that has been sent down upon the nations
A gift to all of those who accept [it]
A [cause of] regret for all those who reject [it]
Those losers have turned away [and been blinded]
From the Remembrance of Allah they have been made to go far away`
                ],
                languages: ["ar", "en"]
            },
            {
                titles: ["صبرت على الشدائد", "I have bore patiently the difficult times"],
                texts: [
`لأصْبِرنَّ إن حَزِنْتُ
لأصْبِرنَّ إن فَشِلْتُ
لأصْبِرنَّ ولو قُتِلْتُ`,
`I will be patient when I become sad
I will be patient when I fail
I will be patient even if I am killed`
                ],
                languages: ["ar", "en"]
            },
            {
                titles: ["Is this life? Scared of everything?"],
                texts: [
`Is this life?
Scared of everything?
Scared of those who are dear to me?
Scared of the things that would give me so much joy?
It would be much easier to fly to the sky and sit on the clouds,
but perhaps the fear of flying
and the fear of leaving behind
would prevent me from reaching my dreams`
                ],
                languages: ["en"]
            },
            {
                titles: ["Me lo arrepiento de haber hecho", "I regret having done it"],
                texts: [
`Me arrepiento de haber hecho lo que he hecho
Si puediera retroceder en el tiempo
Cambiaría mi comportamiento`,
`I regret having done what I had done
If I could go back in time
I would change my behaviour`
                ],
                languages: ["es", "en"]
            },
            {
                titles: ["لو كان لي كرة", "If only I had another chance"],
                texts: [
`لو كان لي كرة
فأصيب بلا خطإ
فأسعد دون تعس
فأنجح دون فشل`,
`If only I had another chance
So I would do what is correct without mistake
And be happy with no sadness
And succeed with no failure`
                ],
                languages: ["ar", "en"]
            },
            {
                titles: ["قصيدة عن الندامة", "A poem about regret"],
                texts: [
`أندم كل حياتي
من ولادتي إلى مماتي
والتغيير أكيد ممكن
ولكن تأثير الماضي باقي`,
`I regret my entire life
From my birth to my death
And change is indeed possible
But the effect of the past remains`
                ],
                languages: ["ar", "en"]
            },
            {
                titles: ["The boy with his blue sailor hat"],
                texts: [
`See the boy with his blue sailor hat
Sailing across the sea
He does not know where he is headed
But he is sure that this is no dream

See the boy with his blue sailor hat
Every waking hour syncing with the tide
When a bird lands on his ship
He is quick to let out a sigh

“Look at this bird, free to fly” he says
While he’s a prisoner of his own mind
After all, a boy of his age cannot sail a ship
So perhaps it is all in his mind`
                ],
                languages: ["en"]
            },
            {
                titles: ["اليوم لقيت موتي", "Today I met my death"],
                texts: [
`اليوم لقيت موتي
وسمعت من يبكي علي
وأنا في روضة نعيم
فسح الله لي مجالي
اليوم لقيت حياة
حياة لا تعقل لعاقل
ولا تتخيل لمتخيل
اليوم لقيت أمنا وسلامة
من هم وكرب وتعاسة
اليوم لقيت سرورا
في قبر يجدون فيه نورا
أغنى عني أعمالي
والملكان يسألانني
وأجيب فأصيب
ولو رأى الناس نعمتي ونعمتي
وسكينة قبر خيرها
لتمنوا لو كانوا مكانه`,
`Today I met my death
And I heard people weeping over me
But I am in a blissful garden
Allah has made spacious my space
Today I have met life
A life that cannot be understood by the one of understanding
Nor can it be imagined by the one who imagines
Today I have met security and safety
From worry, misfortune and sadness
Today I have met blissfulness
In a grave they find within it light
And my actions have availed me
And the two angels ask me
And I answer and get it right
And if the people saw my bliss and ….
And the tranquility of the grave of the best of them
They would have wished to be in his place`
                ],
                languages: ["ar", "en"]
            },
            {
                titles: ["Night time, I need you more than ever"],
                texts: [
`Night time, come around a little quicker
Night time, stay around a little longer
You are the silence after a loud day
You are the rest after a tiresome day
You are the reflection after a day of distraction
And when day time comes I will wait for you again
Night time, I need you more than ever`
                ],
                languages: ["en"]
            },
            {
                titles: ["Little Words, Many Thoughts"],
                texts: [
`I am one of little words
But one of many thoughts
I would wish that my thoughts be lessened
But never would I wish that my words increase
For many thoughts may harm myself
But many words will undoubtedly harm others`
                ],
                languages: ["en"]
            }
		]
	}
);

// COMPLETE
let simon = new Poet(
    {
        name: "Simon Pasha",
        photo: "https://cdn.discordapp.com/avatars/741694073500336128/3159bcb7a2ee0d4b1753220d0115a8dd.png?size=4096",
        bio: "",
        poems: [
            {
                titles: ["The Nature of War"],
                texts: [
`It doesn't matter who you are
Or where you've been.
It doesn't care what you've done
Or who you love.
Thus is The Nature Of War,
When men fight with guns,
And tanks,
And planes,
And bombs.
It will snatch away your future,
Your hopes and your dreams.
You'll be sent to die for your homeland, no matter your upbringing.
When Politicians decided for you to fight, then off you go the war,
while they sit on their rears and watch.
Nobody is safe from The Nature Of War.`
                ],
                languages: ["en"]
            },
            {
                titles: ["The Long Hunt For Food"],
                texts: [
`How long has it been since I last ate?
a day? Two? Five? Seven?
Out hiding in the tall grass, I stalk my prey. A lone gazelle. 
My whole family depends on me to catch this animal; if I don't, we will starve.
Many of my friends and neighbors have already succumbed to the famine, and I fear my family will too.
I approach the gazelle, which I have been following for days, waiting for it to stray from its herd.
At last, it has stopped for a drink. I take aim. I fire my bow...
It hits its mark. My family can eat at last. We will survive, for now.`
                ],
                languages: ["en"]
            },
            {
                titles: ["Poem?"],
                texts: [
`This is a poem
I know it's hard to believe
But as you can see
It's something your mind can conceive
It's written kinda funny
And it's a little on the nose,
But this is indeed
Technically a poem.`
                ],
                languages: ["en"]
            }
        ]
    }
)

// COMPLETE
let ereborian = new Poet(
    {
        name: "Ereborian",
        photo: "https://cdn.discordapp.com/avatars/850019446352642099/2178e6cac26839bc9f7d4010ea019dc5.png?size=4096",
        bio: "",
        poems: [
            {
                titles: ["I Know It Doesn't Help"],
                texts: [
`I know it doesn’t help
It just gives me more pain
But I do it every day 
It relaxes my mind
I will try everything 
No matter the cost
Huffing or puffing
Its all the same if it gives that Final result`
                ],
                languages: ["en"]
            },
            {
                titles: ["I Walk Through The State"],
                text: [
`I walk through the state 
But to see nothing but Hate
No love for the nation
Not even for Allah or Nature
People used to oppression 
No free will or positive expression 
Oh Östruck what have you become`
                ],
                languages: ["en"]
            },
            {
                titles: ["I Try Everything To Forget"],
                texts: [
`I try everything to forget
But my heart has not reset
Everything is running out
I feel increasing doubt 
That one say I'll move on 
But I really don't want you gone
I will love you no matter what`
                ],
                languages: ["en"]
            },
            {
                titles: ["My Number One"],
                texts: [
`Thinking of you is like a wound 
The further I go the more it hurts
I want to move on but I can't 
You're still my number one babe`
                ],
                languages: ["en"]
            },
            {
                titles: ["Dusza Cieńsszka Smutek Boli", "A Thin Soul Sorrow Hurts"],
                texts: [
`Dusza cieńsszka Smutek Boli
Nikotyna jusz nie pomaga
Tylko wszystko Rozjebała
Patyczek Nie wystarczy 
Po dniu światełko miga 
Co próbuje nie zadziała 
Kiedy to się kurwa skończy`,
`A thin soul Sorrow hurts
Nic dosent help No more
It just f*cked it all up more
A stick dosent last
After a day the light flashes 
Whatever I try nothing works
When will this be f*cking over`
                ],
                languages: ["pl", "en"]
            }
        ]
    }
)

// COMPLETE
let aidan = new Poet(
    {
        name: "Aidan",
        photo: "https://cdn.discordapp.com/avatars/780987521236467722/5995dbf5aa7bdb01852901d358e89376.png?size=4096",
        bio: "Natively bilingual in English and Esperanto",
        poems: [
            {
                titles: ["L'Koncentrej'", "The Concentration Camp"],
                texts: [
`Sidas ni en la koncentrej'
Provante instrui lingvon mian
Kaj ankaŭ mi miras se mi estas ne mia mortej'
Simple mi revolas hejmon mian.`,
`I sit in the concentration camp
Trying to teach my language
And also wondering if this will be my death place
I only want my home back.`
                ],
                languages: ["eo", "en"]
            },
	    {
                titles: ["Estas Ni (Qardashi Version)"],
                texts: [
`Ali ma Ali ma nuus e la tawa pona
Ali ma Ali ma nuus e la nageh
E nuus kehn nuus e la tawa pona
E nuus kehn nuus e la tawa pona.`
                ],
                languages: ["qr"]
            },
            {
                titles: ["Estas Ni", "Estas Ni"],
                texts: [
`Ĉie ĉie estas ni ne bonvenataj
Ĉie ĉie estas ni malamataj
Nur Inter ne povas ni esti bonvenataj
Nur Inter ni povas ni esti akceptataj`,
`Everywhere everywhere we are not welcomed
Everywhere everywhere we are not loved
Only between us are we welcomed
Only between us are we accepted`
                ],
                languages: ["eo", "en"]
            },
            {
                titles: ["Unu Speciala Stelo (Ŝajario Versio)", "One Special Star (Shayari Version)"],
                texts: [
`Kiel mi rigardas la noktan ĉielon, dum nebula nokt', mi rimarkas unun stelon
Mi rimarkis ĝian belon
Mi povus vidi ĝin malgraŭ la nebulo dika
L' stel' estis unika 
Unu speciala stelo ĝi estis`,
`As I look at the night sky, during a foggy night, I remark one star
I remarked it's beauty
I could see it despite the thick fog
The star was unique
One special star it was`
                ],
                languages: ["eo", "en"]
            },
            {
                titles: ["Unu Speciala Stelo", "A Special Star"],
                texts: [
`Kiel mi rigardas la noktan ĉielon, dum nebula nokt', mi rimarkas unun stelon
Ĝi estis pli hela ol la aliaj
Mi ankaŭ rimarkis ĝian belon
Ĝi estis pli bela ol aliajn stelojn kiujn mi vidis en antaŭaj spertoj miaj
L' stel' estis unika
L' plej granda en la ĉiel'
Mi povus vidi ĝin malgraŭ la nebulo dika
Unu speciala stelo ĝi estis
Pli granda kaj hela ol la aliaj.`,
`As a look at the night sky, during a foggy night
I remark one star
It is brighter than the others
I also remark it's beauty
It is more beautiful than the start that I have seen in my past experiences
The star is unique
The biggest in the sky
I could see it despite the thick fog
One special star it was
Bigger and brighter than the rest`
                ],
                languages: ["eo", "en"]
            }
        ]
    }
)

// COMPLETE
let bibo = new Poet(
    {
        name: "Bibo Tektek",
        photo: "https://cdn.discordapp.com/avatars/266737764135862276/d36a326125d04908c310ade2afd512ab.png?size=4096",
        bio: "",
        poems: [
            {
                titles: ["Xolnn", "Cl0ne"],
                texts: [
`Mi frenn Xolnn
Wî y' enn
Mi myç je
Wye wer Xætzy

Mi frenn Xolnn
Wye wer çyt
Dyç dê wye çytçy
Wî y' tçxytônt det

Mi frenn Xolnn
Wye wer læid
T læid lyv tê det
Ys detynne

Mi frenn Xolnn
Bæc byprôszye
Mi wyl dwt mæd
Mi wyl xyl för je Xolnn

Els dêe tçxytynne a frensyptte
Frensyptte tçxyto ae çytçy`,
`My friend cl0ne
Why did it end
I miss you
We were cats

My friend cl0ne
We were together
This day we are lost
Why did it break on death

My friend cl0ne
We were a language
The language lives to die
It's dying

My friend cl0ne
Please return
I will welcome you
I will kill for you, cl0ne

Unless time has rot our friendship
A broken and lost friendship`
                ],
                languages: ["ks", "en"]
            },
            {
                titles: ["Hetæ sec"],
                texts: [
`Hetæ sec aë tac aë slec aë ðet âl ônt t s'et
Hetæ ðet tac aë ðet slec aë ðet âl ônt t s'et
Hetæ sec aë tac aë slec aë ðet âl ônt t s'et
Hetæ ðet tac aë ðet slec aë ðet âl ynt t wex

Sec aë tac j'et`
                ],
                languages: ["ks"]
            },
            {
                titles: ["I Am Not Me"],
                texts: [
`I am not me
Who are you
Why are you me

You are not me
Why are you he
I am not me

You are not me
Why are you he
Why are you me

I'm not really real
I'm not your meal
I am not me

I'm not really real
I'm not your meal
Why are you me

I'm not really real
You are not me
I am not me
Why are you me

Who are you
Are you me`
                ],
                languages: ["en"]
            },
            {
                titles: ["Hell"],
                texts: [
`hell-
-o please dont whisper in
my ear hell
for we are in
it`
                ],
                languages: ["en"]
            },
            {
                titles: ["Ðeteöwrṙë", "Killer"],
                texts: [
`Tæ xyl 
wvnn xyl
Tæ tês
wvnn mâŕ

Tæ mâŕenðy
Êysentiyrṙë
Tês mârxsy
Ðeteöwrṙë`,
`To kill
Want kill
To taste
Want blood

To bleed
To smell
To taste blood
Killer`
                ],
                languages: ["ks", "en"]
            },
            {
                titles: ["Xvffraiymentymynnë", "Secret"],
                texts: [
`Ðey nysîynsxômynnë xvffraiymentymynnë
Ys lærenðy`,
`They don't know the secret
It's layered`
                ],
                languages: ["ks", "en"]
            },
            {
                titles: ["Êysentiyrymentymynnë Ffiyrynnë Hetrelnćiynnë", "The Smell of Burning Brain"],
                texts: [
`Memryë xörryðenðy
Memryë xörryðenðy
Memryë xörryðenðy
Memryë xörryðenðy
Memryë xörryðenðy
Se næi
Se næi
Syet ynn tac.`,
`Memory corrupted
Memory corrupted
Memory corrupted
Memory corrupted
Memory corrupted
Can't see
Can't see
See you in the black.`
                ],
                languages: ["ks", "en"]
            },
            {
                titles: ["Cgryscêreöwrṙë", "Cheater"],
                texts: [
`Êysentiyrffolxmârxsy ônt Næixyfreöwryffâlsymentymynnë
Ffolxnæixyfreöwryffâlsymentymynnë yst Xræfftmænexsxwtygôllë
Cgryscêrṙë yst Xyl
Ffolxnæixyfreöwryffâlsymentymynxræfftmænexsxwtygôllë yst Cgryscêreöwrṙë`,
`To smell the blood of the person on the polygraph
He's an amazing craftsman
To cheat is to kill
The craftsman is a cheater`
                ],
                languages: ["ks", "en"]
            },
            {
                titles: ["Teyrnas Nofa", "New Kingdom"],
                texts: [
`Mâŕynnë mârxsynnë æë sffærþ mâŕynnë
Xyltæynnë ônt tynn
Mytiylþazyðinnë mârxsy
Rybelywörćiynnë a Ærhð
Symyhw xynstæxörenðy teyrnas nofa

Rybelywörćiynnë a Teyrnas Nofa!
Tær ffolxsymörynë
Syc'y tæ tys
Teyrnas syc'y tæ taimmë`,
`Rust bleeding from the rusty sword
Fighting on the street
To fear blood
Rebellion at Ærhð
Which birthed a new kingdom

Rebellion at the New Kingdom!
Two groups of people
Lost to one
The Kingdom lost to time`
                ],
                languages: ["ks", "en"]
            },
            {
                titles: ["Sxæslyrrörryn'nörrrynnë", "Sxæslylver"],
                texts: [
`T zynn ynt xâlt
Êysentiyrṙë t'ærrônnë
M'ynt tac âlt
Ŕyëbârṙë yn'ærrônnë
Wy wöðyfiyr aë wöðyfr
Sxæslyrrörryn'nörrrynnë`,
`The symbol in the cold
To smell the air
I'm in the ol dark
Rebar in the air
With burning and metal wood
Sxæslylver`
                ],
                languages: ["ks", "en"]
            },
            {
                titles: ["Wör Xör Xsr", "Wör Xör Xsr"],
                texts: [
`Tec xyntac teserac
Neðr xörð, wör xör tæ tör
Se ðet slec
Ônt pæpr wy sylfr cör`,
`Grey tech tesseract 
Under order, important war for the ruler
See bad death
On paper with silver ichor`
                ],
                languages: ["ks", "en"]
            },
            {
                titles: ["Teyrnas ys Ðet", "Kingdom Is Dead"],
                texts: [
`Xaxæ mârxsy
Sffærþsec taxmâŕ
Læssë xylpârtör
Teyrnas ys ðet

Ffolxwör læigtæ
Ffiyrwöð aë læssë lvf
Xatzy, xiðet
Teyrnas ys ðet

Ffiyrfr mârxsy
Âl yn yffolc
Fflaggë Ðet aë Mâŕxsy
Teyrnas ys ðet`,
`Trees of blood
Dry maroon sword
Lady Suppressor
Kingdom is dead

Warfolk to religion
Charcoal and lady love
Cat, dead dog
Kingdom is dead

Fire-metal blood
All in inside folk
Flag of Death and Blood
Kingdom is dead`
                ],
                languages: ["ks", "en"]
            },
            {
                titles: ["Texmâŕxnai", "Texmâŕxnai"],
                texts: [
`Texmâŕxnai
Tec ðast taxmâŕ mârxsy
Tec ðast nexsxwtygôllë
Tec tac
Tec mâŕ

Tec tac aë tec tæ ðet âl
Tec mâŕ aë tec tæ mârxsy
Tec tac aë tec tæ ðet âl
Tec mâŕ aë tec tæ mârxsy
Texmâŕxnai`,
`Texmâŕxnai
Tech of maroon blood
Amazing tech
Black tech
Red tech

Black tech and tech to kill all
Red tech and tech to bleed
Black tech and tech to kill all
Red tech and tech to bleed
Texmâŕxnai`
                ],
                languages: ["ks", "en"]
            },
            {
                titles: ["Taxmâr Mârxsy", ""],
                texts: [
`Taxmâŕ mârxsy mârxsynnë æë taxmâŕ exstöia mârxsy
Taxmâŕ mârxsy mârxsynnë æë taxmâŕ exstöia mârxsy
Taxmâŕ mârxsy mârxsynnë æë taxmâŕ exstöia mârxsy

Taxmâŕ mârxsy ðinxmentymynnë

23`,
`Maroon blood bleeding from a maroon blood-river
Maroon blood bleeding from a maroon blood-river
Maroon blood bleeding from a maroon blood-river

Maroon blood drink

23`
                ],
                languages: ["ks", "en"]
            }
        ]
    }
)

// COMPLETE
let wendigo = new Poet(
    {
        name: "Wendigo",
        photo: "https://cdn.discordapp.com/avatars/747229190788612197/bed577122dd7047d175032d56a9a4d22.png?size=4096",
        bio: "",
        poems: [
            {
                titles: ["Marching of May"],
                texts: [
`The Spears thrown
The cannons shot

The Emperor on his throne
The weather so hot

Soldiers marching at day
Mercenaries purging at night

In the month of May
Fighting for what they thought to be right

Knights charging despite the fright
Slashing using all their might
Their foes seeing a white light`
                ],
                languages: ["en"]
            }
        ]
    }
)
