import { v4 as uuidv4 } from "uuid";
import dt_dance from "./audio_samples/dt_dance.mp3";
import symphony_oddysey from "./audio_samples/symphony_oddysey.mp3";
import dt_metropolis from "./audio_samples/dt_metropolis.mp3";
import haken_nil from "./audio_samples/haken_nil.mp3";
import tame_let from "./audio_samples/tame_let.mp3";
import scale_atlas from "./audio_samples/scale_atlas.mp3";
import symphony_sea from "./audio_samples/symphony_sea.mp3";
import dt_glass from "./audio_samples/dt_glass.mp3";

function songsList() {
  return [
    {
      name: "The Dance of Eternity",
      artist: "Dream Theater",
      album: "Metropolis Pt. 2: Scenes from a Memory",
      cover:
        "https://3.bp.blogspot.com/-1ILBuoJhSwA/XF7-Dz42ujI/AAAAAAAAyzs/FRJyJvahiBgb0VPFMDAlOjiHqH2rACmxwCLcBGAs/s640/1999%2BMetropolis%2BPt.%2B2%2BScenes%2BFrom%2Ba%2BMemory%2B-%2BDream%2BTheater%2B%2528L.P%2BE.U%2B2014%2BMusic%2BOn%2BVinyl%2BMOVLP1001%2529%2B01.jpg",
      audio: dt_dance,
      genre: "Progressive Metal",
      about:
        "Dream Theater is an American progressive metal band formed in 1985 under the name Majesty by John Petrucci, John Myung and Mike Portnoy while they attended Berklee College of Music in Boston, Massachusetts.",
      song_desc:
        "Due to its complexity and many time signature changes (108 in total), The Dance of Eternity is often regarded as one of the most complex songs ever written.",
      link: "https://www.youtube.com/watch?v=eYCYGpu0OxM",
      id: uuidv4(),
      active: true,
    },
    {
      name: "The Odyssey",
      artist: "Symphony X",
      album: "The Odyssey",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/f/fd/SymphonyXTheOdyssey.jpg",
      audio: symphony_oddysey,
      genre: "Progressive Power Metal",
      about:
        "Symphony X is an American progressive metal band from Middletown, New Jersey. Founded in 1994, the band consists of guitarist Michael Romeo, keyboardist Michael Pinnella, drummer Jason Rullo, lead vocalist Russell Allen and bassist Michael Lepond.",
      song_desc:
        "The title track is, as expected, simply epic. It manages to hold your attention throughout the entire 20+ minutes with it’s amazing guitar work, vocals, and keyboards.",
      link: "https://www.youtube.com/watch?v=MaN3pwBsRf8",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Metropolis Part I - The Miracle and the Sleeper",
      artist: "Dream Theater",
      album: "Images and Words",
      cover:
        "https://i.pinimg.com/564x/6a/e1/20/6ae1208b009b616d820f00ad28e6d11a.jpg",
      audio: dt_metropolis,
      genre: "Progressive Metal",
      about:
        "Dream Theater is an American progressive metal band formed in 1985 under the name Majesty by John Petrucci, John Myung and Mike Portnoy while they attended Berklee College of Music in Boston, Massachusetts.",
      song_desc:
        "The song is most known for its extended instrumental section, which was some of the most difficult and complex music the band had written and performed at that time. As with many progressive songs, the song has multiple sections and changes. This song is featured in the 2015 rhythm game Rock Band 4 as one of the hardest songs in the game and the last song played in the career mode.",
      link: "https://www.youtube.com/watch?v=IqqRx77T4Vo",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nil by Mouth",
      artist: "Haken",
      album: "Vector",
      cover:
        "https://upload.wikimedia.org/wikipedia/commons/2/27/Haken_-_Vector_%282018%29.jpg",
      audio: haken_nil,
      genre: "Progressive Metal",
      about:
        "Haken are an English progressive metal band formed in 2007 by multi-instrumentalist Richard Henshall, guitarist Matthew Marshall, and vocalist Ross Jennings. While Henshall, Marshall, and Jennings first had the idea of forming Haken in 2004, they opted to pursue their instruments and songwriting first.",
      song_desc:
        "Nil by Mouth is the fifth track on Haken’s fifth studio album, Vector. It is the band’s first instrumental song (when excluding short interludes) since Premonition and Portals from Visions. At a length of almost seven minutes, it is also one of the bands longest instrumentals to date.",
      link: "https://www.youtube.com/watch?v=-nmI6fj7ICc",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Let it Happen",
      artist: "Tame Impala",
      album: "Currents",
      cover:
        "https://s.mxmcdn.net/images-storage/albums/0/6/4/0/6/9/31960460_350_350.jpg",
      audio: tame_let,
      genre: "Indie Rock",
      about:
        "Tame Impala is the psychedelic music project of Australian multi-instrumentalist Kevin Parker.[5] In the recording studio, Parker writes, records, performs, and produces all of the project's music. As a touring act, Tame Impala consists of Parker (guitar, vocals), Dominic Simper (guitar, synthesiser), Jay Watson (synthesiser, vocals, guitar), Cam Avery (bass guitar, vocals), and Julien Barbagallo (drums, vocals)",
      song_desc:
        "Let It Happen is about finding yourself always in this world of chaos and all this stuff going on around you and always shutting it out because you don't want to be part of it. But at some point, you realize it takes more energy to shut it out than it does to let it happen and be a part of 'it'. The theme of Currents is personal transition, and Let It Happen was sequenced as the album's opening song to exemplify acceptance.",
      link: "https://www.youtube.com/watch?v=odeHP8N4LKc",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Atlas Novus",
      artist: "Scale The Summit",
      album: "The Migration",
      cover:
        "https://img.discogs.com/WxKKb2shbGHYHB7Q03CzB6yljYg=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4651287-1531091561-6700.jpeg.jpg",
      audio: scale_atlas,
      genre: "Progressive metal",
      about:
        "Scale the Summit is an American instrumental progressive metal band based out of Houston, Texas. It formed in 2004 and signed to Prosthetic Records. The band is influenced by other progressive acts such as Cynic and Dream Theater. ",
      song_desc: "What a song!",
      link: "https://www.youtube.com/watch?v=HTnSjYSb7FU",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sea of Lies",
      artist: "Symphony X",
      album: "The Divine Wings of Tragedy",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/a/a9/SymphonyXTheDivineWingsOfTragedy.jpg",
      audio: symphony_sea,
      genre: "Progressive Power Metal",
      about:
        "Symphony X is an American progressive metal band from Middletown, New Jersey. Founded in 1994, the band consists of guitarist Michael Romeo, keyboardist Michael Pinnella, drummer Jason Rullo, lead vocalist Russell Allen and bassist Michael Lepond.",
      song_desc:
        "Powerful and technical, Michael Romeo shines with its main riff and double-tapping solo.",
      link: "https://www.youtube.com/watch?v=1T7WGasjju0",
      id: uuidv4(),
      active: false,
    },
    {
      name: "The Glass Prision",
      artist: "Dream Theater",
      album: "Six Degrees of Inner Turbulence",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/3/3d/Dream_Theater_-_Six_Degrees_of_Inner_Turbulence.jpg",
      audio: dt_glass,
      genre: "Progressive Metal",
      about:
        "Dream Theater is an American progressive metal band formed in 1985 under the name Majesty by John Petrucci, John Myung and Mike Portnoy while they attended Berklee College of Music in Boston, Massachusetts.",
      song_desc:
        "The Glass Prison is the beginning of the Twelve-step Suite, dealing with Mike Portnoy's story of rehabilitation from alcoholism, continued in tracks on subsequent albums. It features powerful riffs with many different time signatures and extends over 13 minutes.",
      link: "https://www.youtube.com/watch?v=B2ImxfctL4M",
      id: uuidv4(),
      active: false,
    },
  ];
}
export default songsList;
