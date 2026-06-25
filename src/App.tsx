import { Button } from '@alfalab/core-components/button/cssm';
import { Gap } from '@alfalab/core-components/gap/cssm';
import { PureCell } from '@alfalab/core-components/pure-cell/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';
import { ExclamationCircleMIcon } from '@alfalab/icons-glyph/ExclamationCircleMIcon';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import detailsImg from './assets/details.png';

import hbImg from './assets/hb.png';
import radarImg from './assets/radar.svg';
import { phoneSlides } from './data';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';

const LINK =
  'alfabank://sdui_screen?endpoint=v1%2Fgrowthhack-widget-experiment%2Fwidgets%2F0c1eaaaa-f56e-4e81-8f3a-1043f0025e0f&presentationTypeWeb=PRESENT&title=%D0%A8%D0%B0%D1%85%D0%BC%D0%B0%D1%82%D1%8B&screenName=loyalty_1_final';

export const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const submit = () => {
    setLoading(true);

    window.location.replace(LINK);
  };

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.boxHero}>
          <div>
            <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="medium" weight="bold">
              Альфа-Шахматы
            </Typography.TitleResponsive>
            <Typography.Text view="primary-small" color="secondary">
              Стань лучшим среди Альфы
            </Typography.Text>
          </div>
          <img src={hbImg} alt="HB" width="100%" height={260} style={{ objectFit: 'contain' }} />
          <div style={{ padding: '0 1rem' }}>
            <PureCell className={appSt.bannerCell}>
              <PureCell.Content>
                <PureCell.Main>
                  <Typography.Text view="primary-small" color="secondary">
                    Прогрессируйте при помощи ИИ-Ассистента
                  </Typography.Text>
                </PureCell.Main>
              </PureCell.Content>
              <PureCell.Graphics verticalAlign="center">
                <ExclamationCircleMIcon color="#898991" />
              </PureCell.Graphics>
            </PureCell>
          </div>
        </div>

        <div style={{ marginLeft: '20px' }}>
          <Swiper slidesPerView="auto" spaceBetween={8} slidesOffsetAfter={20}>
            {phoneSlides.map((slide, index) => (
              <SwiperSlide style={{ width: 'fit-content' }} key={index}>
                <div className={appSt.slidePhone}>
                  <img src={slide.img} alt={`Phone Slide ${index + 1}`} width={200} />
                  <div>
                    <Typography.TitleResponsive tag="h3" view="medium" weight="bold">
                      {slide.title}
                    </Typography.TitleResponsive>
                    <Typography.Text view="primary-small" color="secondary">
                      {slide.text}
                    </Typography.Text>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={appSt.boxAccess}>
          <Typography.TitleResponsive tag="h3" view="medium" weight="bold">
            Система прогрессии
          </Typography.TitleResponsive>

          <div>
            <div className={appSt.row}>
              <Typography.Text view="primary-large" weight="medium">
                Радар навыков
              </Typography.Text>

              <div className={appSt.tag}>
                <Typography.Text view="primary-small" color="secondary">
                  Юниор
                </Typography.Text>
              </div>
            </div>
            <Typography.Text view="primary-small" color="secondary">
              Отслеживайте изменения собственных игровых привычек
            </Typography.Text>
          </div>

          <img src={radarImg} alt="Radar" width="100%" height={226} style={{ objectFit: 'contain' }} />

          <PureCell className={appSt.bannerCell}>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.Text view="primary-small" color="secondary">
                  Рейтинг обновляется каждые 5 игр
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
            <PureCell.Graphics verticalAlign="center">
              <ExclamationCircleMIcon color="#898991" />
            </PureCell.Graphics>
          </PureCell>

          <div style={{ marginTop: '1rem' }}>
            <div className={appSt.row}>
              <Typography.Text view="primary-large" weight="medium">
                ИИ-Ассистент
              </Typography.Text>

              <div className={appSt.tag}>
                <Typography.Text view="primary-small" color="secondary">
                  Бот
                </Typography.Text>
              </div>
            </div>
            <Typography.Text view="primary-small" color="secondary">
              Автоподсказки в игре и технический анализ партий
            </Typography.Text>
          </div>

          <img src={detailsImg} alt="Details" width="100%" height={271} style={{ objectFit: 'contain' }} />

          <Gap size={96} />
        </div>
      </div>

      <div className={appSt.bottomBtn}>
        <Button
          block
          view="primary"
          loading={loading}
          onClick={submit}
          style={{ borderRadius: '2rem' }}
          hint="Шахматы + ИИ-Ассистент"
          size={72}
        >
          Играть за 399 ₽
        </Button>
      </div>
    </>
  );
};
