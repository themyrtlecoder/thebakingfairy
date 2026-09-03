'use client';

import styles from './page.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import FieldNotes from './components/fieldnotes';
import Logo from './components/svg';

const Index = () => {
    const [inter, setInter] = useState<'findings' |'field notes'>('findings');
    return (
        <main>
            
           <div className={styles.findings}>
                <h4>A Practice In Imperfection + Community</h4>
                <p>Who could’ve imagined I’d grow so attached to an ingredient?</p>
                <p>The outsized butter block had been sitting in the freezer for almost a year when I decided it was time to try again. Buzzing with the energy of another kind of uncertainty, I let Claire Saffitz talk me back on the ledge. I threw the old butter study away and made a new détrempe and proportional butter block, and another, and just one more…a series of obsessive successions to slow my crash into doubt. Since I wasn’t sure about the lamination of the first batch, I decided to hedge my bets.</p>
                <p>A baby born on the cusp of spring, my best birthdays were earmarked by too-early strawberries: nibbling with a close friend on a bright day in high school and the annual yellow cake sandwiching a strawberry and Bavarian cream center. That sense memory just felt right for a mishap during the mid-summer season.</p>
                <p>Three batches, 48 hours, and one and a half dozen croissant bases filled with Bavarian and whipped creams and strawberries: the experiment was an ode to certainty, joy, and care — three things that I had been stubbornly chasing for too long. </p>
                <p>Being unknown is both freeing and tiring. The thrill of superficial connection tends to get swallowed by a prior life: a nostalgia for when no explanation was necessary because the surrounding community guarded, celebrated, and referenced an anthology of you like it was some special thing. In a new place, that library is replaced with an unordered list of sloppy facts: your name, your style, observed routines, and abstracted quirks. It creates a loneliness that, if left long enough, becomes an embedded uncertainty: Do I belong here? Do I even exist at all?</p>
                <p>By late July, that uncertainty had reached a tipping point, one I sought to resolve with a familiar activity: bake to create a solvable uncertainty. But then, my pastry-based problem-solving overshot my now basically non-existent community. Before, baking meant solving the unsolvable or laughing with friends about crazy mistakes that somehow still worked as we ate our weight in sugar. The smell of freshly baked snacks became a calling card for night-long conversations.</p>
                <p>How do I explain an imperfect product to people who don’t actually know me? The pastries weren’t technically…right, but how can you waste that much time, testing, and food? Maybe these sweet memories can exist in an unknown space without context. Actually, maybe these little imperfect things are the only context I need right now. A cobbled list of people, some boxes, and ice packs: Suddenly I felt like the me that existed in a world that was wholly real in another life. It made no sense, but this silly adventure became a door that all of you very graciously indulged. I was giddy with the absurdity of the thing and, more importantly, I wanted to do it again.</p>
                <p>A couple of days later, I left town for what ended up being both a trip down memory lane and a repeated exclamation: “don’t make your world smaller before you have to…”</p>
                <p>Since life grows with the choices we make to exist through uncertainty, this little project is my experiment in sharing in the in-between. I hope you’ll stay with me on the journey. I promise to keep it Peachy Keen ; )</p>
                <p>With Love + Whimsy,</p>
                <Logo/>
            </div>
            <FieldNotes state={inter}/>
            <nav className={styles.navigation}>
                <Link className={styles.soundtrack} href="https://open.spotify.com/playlist/75gUNiBaox5LiMmwtNq4X6?si=3ca07ec41d304fe3&pt=64d3169c1f7ad1843a1df24833d1b103">
                    <button>&#91; &nbsp; seasonal snack soundtrack &nbsp; &#8599; &nbsp; &#93;</button>
                </Link>
                <div className={[styles.field_toggle, styles[`toggle_${inter.replaceAll(' ', '_')}`]].join('')}>
                    <button onClick={()=>setInter('field notes')} className={[inter === 'field notes' && styles.inactive].join(' ')}>&#91; &nbsp; field notes &nbsp; &#8593; &nbsp; &#93;</button>
                    <button onClick={()=>setInter('findings')} className={[inter === 'findings' && styles.inactive].join(' ')}>&#91; &nbsp; findings &nbsp; &#8595; &nbsp; &#93;</button>
                </div>
            </nav>
        </main>
    )
    
}

export default Index;