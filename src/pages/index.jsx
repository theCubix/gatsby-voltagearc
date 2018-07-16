import React from 'react';

import Heading from '../components/Heading';
import ButtonLink from '../components/ButtonLink';

const IndexPage = () => (
  <div>
    <Heading title="Heading Level 1 with Huge Letter" letter="H" />
    <div className="z-1">
      <h1 className="heading heading--level-1 heading--margin-top-large">Heading Level 1</h1>
      <h2 className="heading heading--level-2">Heading Level 2</h2>
      <p className="text">
        <b className="text--primary">Regular Text</b> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi velit soluta quibusdam sit possimus commodi eius dignissimos repellendus enim eligendi labore, at iste asperiores impedit praesentium iusto quam suscipit consectetur esse quisquam, totam ex itaque architecto libero. Alias corrupti minima cum. Dolorum, quidem consectetur eum laudantium pariatur eos distinctio? Magnam tempore facilis aspernatur, dignissimos sapiente incidunt atque voluptates ea! Vitae quisquam accusamus aperiam consequatur recusandae impedit saepe odio perspiciatis. Reiciendis nisi iure recusandae eveniet facilis! Quisquam, omnis. Animi tenetur tempore vel commodi odit sequi ipsum! Ducimus consequatur eos, corporis nihil soluta odio? Vel perferendis alias debitis voluptates, nihil est cumque?
      </p>

      <p className="text text--justified">
        <b className="text--primary">Justified Text</b> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi velit soluta quibusdam sit possimus commodi eius dignissimos repellendus enim eligendi labore, at iste asperiores impedit praesentium iusto quam suscipit consectetur esse quisquam, totam ex itaque architecto libero. Alias corrupti minima cum. Dolorum, quidem consectetur eum laudantium pariatur eos distinctio? Magnam tempore facilis aspernatur, dignissimos sapiente incidunt atque voluptates ea! Vitae quisquam accusamus aperiam consequatur recusandae impedit saepe odio perspiciatis. Reiciendis nisi iure recusandae eveniet facilis! Quisquam, omnis. Animi tenetur tempore vel commodi odit sequi ipsum! Ducimus consequatur eos, corporis nihil soluta odio? Vel perferendis alias debitis voluptates, nihil est cumque?
      </p>

      <p className="text text--line-height-narrow">
        <b className="text--primary">Narrow Line Height Text</b> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio aspernatur quasi quia tenetur a, culpa harum quibusdam doloremque praesentium dolorem saepe similique vitae voluptatibus omnis, voluptatem laboriosam unde at perspiciatis nostrum neque ea assumenda error. Temporibus facere aut aperiam eligendi officia doloribus molestias earum veritatis voluptatum eveniet ab fuga maxime rerum, impedit nostrum eius. Neque excepturi nulla repudiandae fugit, minus quasi. Porro accusantium, repellendus in natus id, quia quo, odio itaque distinctio beatae minus impedit. Labore unde ipsum optio porro amet suscipit provident adipisci, assumenda facilis voluptates distinctio, at commodi error quidem, earum fugit quod vero. Blanditiis tempora nostrum necessitatibus.
      </p>

      <p className="text text--line-height-narrower">
        <b className="text--primary">Narrower Line Height Text</b> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio aspernatur quasi quia tenetur a, culpa harum quibusdam doloremque praesentium dolorem saepe similique vitae voluptatibus omnis, voluptatem laboriosam unde at perspiciatis nostrum neque ea assumenda error. Temporibus facere aut aperiam eligendi officia doloribus molestias earum veritatis voluptatum eveniet ab fuga maxime rerum, impedit nostrum eius. Neque excepturi nulla repudiandae fugit, minus quasi. Porro accusantium, repellendus in natus id, quia quo, odio itaque distinctio beatae minus impedit. Labore unde ipsum optio porro amet suscipit provident adipisci, assumenda facilis voluptates distinctio, at commodi error quidem, earum fugit quod vero. Blanditiis tempora nostrum necessitatibus.
      </p>
      <ButtonLink dest="/page-2/" className="z-1 margin-top-md">Go To Page Two</ButtonLink><br />
      <ButtonLink dest="/button/" className="z-1 margin-top-md margin-bottom-md">Visit Button Test Page</ButtonLink>
    </div>

  </div>
)

export default IndexPage
