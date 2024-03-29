import { Link } from "react-router-dom";

import styled from "styled-components";

const LibraryInfoStyle = styled.div`
  .library {
    &__heading {
      padding-right: 30px;
    }

    &__title {
      box-sizing: border-box;
      display: inline-block;
      margin: 10px;
      margin-left: 0;
      font-size: 20px;
      color: #333;
      font-weight: 600;
    }

    &__content {
      margin: 0;
      padding: 25px 0 30px;
    }

    &-info {
      display: flex;
      align-items: flex-start;
      margin-bottom: 8px;

      &__dt {
        position: relative;
        display: block;
        width: 90px;
        color: #444;

        &::after {
          content: "";
          display: block;
          position: absolute;
          top: 5px;
          right: 15px;
          width: 1px;
          height: 10px;
          background-color: #ccc;
        }
      }

      &__dd {
        display: block;
        margin: 0;
        width: calc(100% - 100px);
        color: #444;
        word-break: keep-all;
        word-wrap: break-word;
      }
    }

    &__func {
      display: flex;
      justify-content: flex-end;
    }

    @media (min-width: 768px) {
      &__title {
        font-size: 22px;
      }

      &-info {
        margin-bottom: 10px;

        &__dt {
          width: 100px;
          font-size: 16px;
        }

        &__dd {
          font-size: 16px;
        }
      }
    }
  }
`;

function LibraryInfo(props) {
  const { library, hasMapBtn } = props;
  const infoList = [
    { dt: "운영시간", dd: library.OP_TIME },
    { dt: "정기휴관일", dd: library.FDRM_CLOSE_DATE },
    { dt: "전화번호", dd: library.TEL_NO },
    { dt: "주소", dd: library.ADRES },
  ];

  let libraryFunc = "";
  if (library.HMPG_URL || hasMapBtn) {
    libraryFunc = (
      <div className="library__func">
        {library.HMPG_URL && (
          <a
            href={library.HMPG_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn--sec-bright"
          >
            <span className="btn__text">홈페이지</span>
            {/* 구글 아이콘 폰트 */}
            <span className="material-symbols-outlined btn__icon">
              open_in_new
            </span>
          </a>
        )}
        {hasMapBtn && (
          <Link to={`${library.LBRRY_SEQ_NO}`} className="btn btn--sec">
            지도
          </Link>
        )}
      </div>
    );
  }

  const badgeClass =
    library.LBRRY_SE_NAME === "공공도서관" ? "badge" : "badge badge--sec";

  return (
    <LibraryInfoStyle>
      <div className="library__heading">
        <strong className="library__title">{library.LBRRY_NAME}</strong>
        <span className={badgeClass}>{library.LBRRY_SE_NAME}</span>
      </div>
      <dl className="library__content">
        {infoList.map((info) => {
          if (!info.dd) return;

          let ddContent = info.dd;
          if (info.dt === "전화번호") {
            ddContent = (
              <a href={`tel:${info.dd}`} className="link-btn" title="전화하기">
                {info.dd.trim()}
              </a>
            );
          }
          return (
            <div className="library-info" key={Math.random()}>
              <dt className="library-info__dt">{info.dt}</dt>
              <dd className="library-info__dd">{ddContent}</dd>
            </div>
          );
        })}
      </dl>
      {libraryFunc}
    </LibraryInfoStyle>
  );
}

export default LibraryInfo;
