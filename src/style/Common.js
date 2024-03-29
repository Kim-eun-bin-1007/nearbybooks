import styled from "styled-components";

export const CommonMain = styled.div`
  .hidden {
    position: absolute !important;
    overflow: hidden;
    width: 1px;
    height: 1px;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
  }

  .btn {
    padding: 10px 24px;
    background-color: #e76539;
    border: 1px solid #e76539;
    border-radius: 10px;

    @media (hover: hover) {
      &:hover,
      &:focus {
        background-color: #f2aa92;
      }
    }

    & + .btn {
      margin-left: 10px;
    }

    // color variation
    &--sec {
      background-color: #477d73;
      border-color: #477d73;
      color: white;

      @media (hover: hover) {
        &:hover,
        &:focus {
          background-color: #a4ccc4;
          color: #111;
        }
      }

      &-bright {
        background-color: #a4ccc4;
        border-color: #a4ccc4;

        @media (hover: hover) {
          &:hover,
          &:focus {
            background-color: #e5f5ee;
          }
        }
      }
    }

    // size variation
    &--lg {
      padding: 15px 34px;
      font-size: 16px;

      & + .btn--lg {
        margin-left: 20px;
      }
    }

    // type variation
    &__icon {
      display: inline-block;
      position: relative;
      top: 2px;
      margin-left: 4px;
      font-size: 14px;
      color: #666;
    }
  }

  .link-btn {
    text-decoration: underline;

    @media (hover: hover) {
      &:hover,
      &:focus {
        color: #477d73;
      }
    }
  }

  .info {
    color: #666;
  }

  .badge {
    position: relative;
    top: -2px;
    display: inline-block;
    padding: 5px 12px;
    border: 1px solid #477d73;
    border-radius: 15px;
    font-size: 12px;
    color: #335b54;

    &--sec {
      border: 1px solid #da4b1b;
      color: #b63216;
    }
  }

  .breadcrumbs {
    padding: 20px 0;
    color: #444;

    &__category {
      &::after {
        content: " >";
      }
    }

    a.breadcrumbs__category {
      position: relative;

      &::before {
        content: "";
        display: block;
        position: absolute;
        bottom: -1px;
        left: 0;
        width: calc(100% - 11px);
        height: 1px;
        background-color: #666;
      }

      @media (hover: hover) {
        &:hover,
        &:focus {
          color: #477d73;
        }
      }
    }
  }

  // route transition
  .page {
    &-wrapper {
      position: relative;
      overflow: hidden;
      height: calc(var(--vh, lvh) * 100);
      width: 100%;
    }

    &-enter {
      transform: translateY(30px);
      opacity: 0;
    }

    &-enter-active {
      transform: translateY(0);
      opacity: 1;
      transition: all 350ms ease-in-out;
    }
  }

  @media (min-width: 768px) {
    .btn {
      padding: 12px 26px;
      font-size: 16px;

      & + .btn {
        margin-left: 12px;
      }

      // size variation
      &--lg {
        padding: 18px 38px;
        font-size: 18px;
      }
    }

    .badge {
      top: -2px;
      padding: 5px 15px;
      font-size: 13px;
    }

    .breadcrumbs {
      padding: 20px 0;
      font-size: 18px;
    }
  }
`;

export const ModalInner = styled.div`
  .modal-inner {
    &__desc {
      padding-bottom: 30px;
      border-bottom: 1px solid #eee;
      color: #444;
      text-align: center;
      line-height: 1.4;
    }

    &__func {
      text-align: right;
    }
  }

  .data-info {
    padding: 20px 10px;

    &__category {
      font-size: 16px;
      font-weight: 600;
    }

    &__item {
      display: flex;
      margin-bottom: 4px;
    }

    &__dt,
    &__dd {
      font-size: 14px;
      color: #444;
    }

    &__dd {
      margin-left: 5px;
      color: #666;
    }

    &__p {
      margin-top: 15px;
      font-size: 14px;
      color: #444;
      line-height: 1.5;
    }
  }

  @media (min-width: 768px) {
    .modal-inner {
      &__desc {
        padding-bottom: 40px;
        font-size: 18px;
      }
    }

    .data-info {
      &__category {
        font-size: 18px;
      }

      &__dt,
      &__dd {
        font-size: 15px;
      }

      &__dd {
        margin-left: 8px;
      }

      &__p {
        font-size: 15px;
      }
    }
  }
`;
