import React from "react";

import "./bgImage.scss";

const BgImage = () => {
  const textOpen = `Afoot and light-hearted I take to the open road,
Healthy, free, the world before me,
The long brown path before me leading wherever I choose.
 Henceforth I ask not good-fortune, I myself am good-fortune,
Henceforth I whimper no more, postpone no more, need nothing,
Done with indoor complaints, libraries, querulous criticisms,
Strong and content I travel the open road.
 The earth, that is sufficient,
I do not want the constellations any nearer,
I know they are very well where they are,
I know they suffice for those who belong to them.
 (Still here I carry my old delicious burdens,
I carry them, men and women, I carry them with me wherever I go,
I swear it is impossible for me to get rid of them,
I am fill'd with them, and I will fill them in return.)
 You road I enter upon and look around, I believe you are not all that is here,
I believe that much unseen is also here.
Here the profound lesson of reception, nor preference nor denial,
The black with his woolly head, the felon, the diseased, the illiterate person, are not denied;
 The birth, the hasting after the physician, the beggar's tramp, the drunkard's stagger, the laughing party of mechanics,
The escaped youth, the rich person's carriage, the fop, the eloping couple,
The early market-man, the hearse, the moving of furniture into the town, the return back from the town,
They pass, I also pass, any thing passes, none can be interdicted,
None but are accepted, none but shall be dear to me.
You air that serves me with breath to speak!
You objects that call from diffusion my meanings and give them shape!
You light that wraps me and all things in delicate equable showers!
You paths worn in the irregular hollows by the roadsides!
I believe you are latent with unseen existences, you are so dear to me.
You flagg'd walks of the cities!
you strong curbs at the edges!
You ferries!
you planks and posts of wharves!
you timber-lined sides!
you distant ships!
You rows of houses!
you window-pierc'd façades!
you roofs!
You porches and entrances!
you copings and iron guards!
You windows whose transparent shells might expose so much!
You doors and ascending steps!
you arches!
You gray stones of interminable pavements!
you trodden crossings!
From all that has touch'd you I believe you have imparted to yourselves, and now would impart the same secretly to me,
From the living and the dead you have peopled your impassive surfaces, and the spirits thereof would be evident and amicable with me.
The earth expanding right hand and left hand,
The picture alive, every part in its best light,
The music falling in where it is wanted, and stopping where it is not wanted,
The cheerful voice of the public road, the gay fresh sentiment of the road.
O highway I travel, do you say to me Do not leave me?
Do you say Venture not   —   if you leave me you are lost?
Do you say I am already prepared, I am well-beaten and undenied, adhere to me?
O public road, I say back I am not afraid to leave you, yet I love you,
You express me better than I can express myself,
You shall be more to me than my poem.
I think heroic deeds were all conceiv'd in the open air, and all free poems also,
I think I could stop here myself and do miracles,
I think whatever I shall meet on the road I shall like, and whoever beholds me shall like me,
I think whoever I see must be happy.
From this hour I ordain myself loos'd of limits and imaginary lines,
Going where I list, my own master total and absolute,
Listening to others, considering well what they say,
Pausing, searching, receiving, contemplating,
Gently,but with undeniable will, divesting myself of the holds that would hold me.
I inhale great draughts of space,
The east and the west are mine, and the north and the south are mine.
I am larger, better than I thought,
I did not know I held so much goodness.
 All seems beautiful to me,
I can repeat over to men and women You have done such good to me I would do the same to you,
I will recruit for myself and you as I go,
I will scatter myself among men and women as I go,
I will toss a new gladness and roughness among them,
Whoever denies me it shall not trouble me,
Whoever accepts me he or she shall be blessed and shall bless me.
`;
  const textForTitle = `Walt Whitman Song of the Open Road`;

  const textTitle = textForTitle.split(" ").map((el, id) => (
    <h1 className="textMain" key={id}>
      {el}
    </h1>
  ));

  const textMain = textOpen.split(/[.,!]/).map((el, id) => (
    <span className="textMain" key={id}>
      {el}
    </span>
  ));

  return (
    <div className="BgImage">
      <div className="textContainer">{textMain}</div>
      <div className="titleContainer">{textTitle}</div>
    </div>
  );
};
export default React.memo(BgImage);
