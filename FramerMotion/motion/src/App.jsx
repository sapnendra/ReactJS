import React from "react";
import { motion, useScroll } from "motion/react";

const App = () => {

  const scrrollYProgress = useScroll().scrollYProgress;
  console.log(scrrollYProgress);

  return (
    <div className="h-[300vh] bg-[#111] text-[#fff] p-10 text-center font-mono">
      <motion.div 
      style={{
        scaleX: scrrollYProgress
      }}
      className="bg-red-500 origin-left w-full h-3 fixed top-0 left-0"></motion.div>

      <h2 className="text-5xl font-bold mb-10">Sheryians coding school</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ex
        accusamus explicabo doloribus ullam tenetur nihil unde architecto, omnis
        rem tempore porro consectetur incidunt officia, commodi ipsum maxime
        est, sed temporibus fuga cumque. Doloremque quam dolores ea, odit fugiat
        distinctio cumque at sit, mollitia quibusdam eum doloribus. Error sed
        ratione repellat non beatae expedita optio modi odit atque saepe minus
        nam, dolore facilis excepturi culpa ut debitis. Eos reiciendis ipsam quo
        rem a, explicabo iste minus similique possimus amet tempore eius qui
        repellendus sunt, officia illo ipsa quos, enim inventore quia! Similique
        ullam sequi officia nisi ipsam ad quis blanditiis? <br /> <br /> <br />{" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam
        obcaecati incidunt aliquam quaerat tempore quidem iure similique modi
        minima praesentium illo voluptatem ut ducimus illum quod facilis, unde
        quasi quia, consequuntur quisquam quis corrupti commodi. Nostrum esse
        consequuntur veritatis tempora culpa nulla nesciunt iste exercitationem,
        saepe, inventore dicta dolores? Voluptatibus alias inventore rem
        eligendi fugit nisi perferendis facere consequuntur enim distinctio eius
        labore explicabo, omnis possimus dolorem fuga. Similique accusamus
        placeat nobis cum saepe quaerat maiores ad at. Animi quasi, praesentium
        explicabo corporis inventore asperiores illum. Nisi impedit aperiam
        velit. Repudiandae perspiciatis expedita, quas distinctio reiciendis
        eaque perferendis consequuntur iste esse repellendus illo consequatur,
        ratione blanditiis modi minima voluptate aliquid? Maxime ipsum corporis
        vitae. Explicabo sunt, voluptas, eveniet nihil distinctio soluta esse
        ipsum vero suscipit iure commodi quos necessitatibus vitae placeat
        voluptate sequi delectus quia laborum odio quisquam dolores <br />{" "}
        <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
        nostrum quo natus veniam maiores, dolorem amet similique repellat
        necessitatibus? Quisquam cupiditate a aliquid culpa aperiam. Impedit
        ullam totam debitis, atque cumque possimus pariatur quasi odit et!
        Tempore ipsa magnam ratione corrupti perferendis explicabo, ducimus
        doloremque modi ullam saepe, voluptatem quasi id minima eligendi
        reiciendis a. Doloribus totam nesciunt asperiores, voluptate quidem quos
        facere minima aut dolorem error maiores quia tenetur sit assumenda
        laudantium delectus eligendi ea, aliquam voluptatum natus fugiat placeat
        explicabo. Esse officiis asperiores assumenda aliquam molestias, quae
        similique, a maiores necessitatibus tempora, laboriosam quia veniam
        delectus qui id. <br />
        <br /> aliquid. Quia sapiente architecto exercitationem nemo, error sed
        neque beatae repudiandae, vel inventore eius fugit sint autem harum
        dolore obcaecati, voluptatibus ipsa quis ipsum accusamus! Quaerat,
        dolore repellendus! Nulla, voluptas. Id veritatis harum quia iure eius
        esse quis modi laboriosam soluta autem eveniet dolores est illo
        consequuntur, cupiditate corporis alias? Et, dicta. Architecto in
        beatae, alias ipsa recusandae quasi a! <br /> <br /> <br /> Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Aspernatur nisi earum
        harum nobis sed, distinctio officia minima facere. Aliquam rem ipsa,
        modi libero nam ea hic dicta minus quaerat sed nulla magni non laborum!
        Eius omnis facilis adipisci rerum ipsam officiis tempora maxime fugit
        quo perferendis hic corporis nemo sit atque enim voluptatibus voluptas
        at, assumenda laborum odit est! Dolor perferendis fugit laboriosam ullam
        consequuntur dolores? Aliquam minus qui necessitatibus aperiam, quisquam
        pariatur ea ratione repudiandae harum explicabo dolore, commodi vel
        molestias nisi ullam id dignissimos quasi. Similique ipsum impedit
        libero perferendis ducimus alias iste omnis harum enim saepe, nemo autem
        perspiciatis? Animi, dolore unde asperiores dicta soluta perferendis
        odit eum a minima maiores maxime molestias architecto magnam magni vero.
        Unde ut ipsum quo debitis quidem quia aliquid recusandae tenetur! Libero
        incidunt officia officiis ipsam, consectetur et unde! Totam porro, nisi
        maxime esse, dignissimos, architecto id adipisci deleniti impedit a nemo
        delectus cupiditate laborum? Tempora soluta alias, dolores perferendis
        eius nemo similique error veritatis dolore vero optio deserunt
        blanditiis id inventore quaerat provident totam, dicta aliquam! Aliquam
        eum optio ipsa voluptates accusamus nulla voluptatem aut laudantium
        alias, hic temporibus excepturi in nam non vero numquam dolorem cum
        molestiae dolorum porro.{" "}
      </p>

      {/* <motion.div
        drag
        whileDrag={{
          scale: 0.8,
        }}
        dragConstraints={{
          left: 0,
          right: 500,
          top: 0,
          bottom: 500,
        }}
        // dragDirectionLock="true"
        className="box h-40 w-40 bg-red-500 rounded-xl"
      ></motion.div> */}

      {/* <motion.div
        animate={{
          x: [0, 700, 700, 0, 0],
          y: [0, 0, 300, 300, 0],
          rotate: [0, 360,0, -360, 0],
          transition: { duration: 4, delay: 0.5 },
        }}
        className="box h-40 w-40 bg-red-500 rounded-xl"
      ></motion.div> */}

      {/* <motion.div
        whileHover={{ scale: 1.5 }}
        whileTap={{scale: 0.8}}
        transition={{duration: 0.5}}
        onTapStart={()=>console.log("Hover Started")}
        className="w-20 h-20 bg-pink-500 rounded-xl"
      ></motion.div> */}

      {/* <motion.div
        initial={{ scale: 1 }}
        animate={{
          x: 400,
          rotate: 360,
          transition: { duration: 2, delay: 0.5, repeat: Infinity, ease:"anticipate" },
        }}
        className="box h-40 w-40 bg-red-500 rounded-xl"
      ></motion.div> */}

      {/* <motion.div
        animate={{
          x:400,
          scale:0.5
        }}
        className="circle h-40 w-40 bg-blue-500 rounded-[50%]"
      ></motion.div> */}
    </div>
  );
};

export default App;
