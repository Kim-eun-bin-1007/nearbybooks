import styled from 'styled-components';

export const HomeWrap = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 100px 20px 60px;
  max-width: 640px;
  min-height: var(--100vh, 100vh);

  .desc {
    margin: 0 auto;
    padding: 20px;
    padding-bottom: 40px;
    max-width: 360px;
    font-size: 18px;
    color: #444;
    line-height: 1.5;
    text-align: center;
  }

  .help {
    margin-bottom: 15px;
    text-align: right;

    .link-btn {
      text-decoration: underline #666;
    }

    &__text {
      font-size: 13px;
      color: #666;
    }
  }

  .category {
    display: flex;
    justify-content: space-between;

    &__item {
      margin-bottom: 40px;
      width: calc(50% - 10px);
    }

    &__link {
      box-sizing: border-box;
      display: block;
      position: relative;
      padding: 15px 15px 100px;
      background-color: #fdf1ed;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.04);
      border-radius: 5px;
      transition: 0.3s;

      @media (hover: hover) {
        &:hover,
        &:focus {
          background-color: #f8d4c9;
          box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);
        }
      }
    }

    &__title {
      margin: 0;
      font-size: 16px;
    }

    &__img {
      display: block;
      position: absolute;
      bottom: 15px;
      right: 15px;
      width: 28px;
      height: 28px;
    }
  }

  .tip {
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.5;
    text-align: center;

    .tip__em {
      color: #111;
    }
  }

  @media (min-width: 768px) {
    .desc {
      font-size: 20px;
    }

    .category {
      &__item {
        margin-bottom: 60px;
        width: calc(50% - 15px);
      }

      &__link {
        padding: 20px 20px 120px;
      }

      &__title {
        font-size: 18px;
      }

      &__img {
        bottom: 20px;
        right: 20px;
        width: 36px;
        height: 36px;
      }
    }

    .tip {
      padding: 30px;
    }
  }
`;