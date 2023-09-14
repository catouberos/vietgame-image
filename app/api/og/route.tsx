/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const logo = await fetch(new URL("./vietgame.png", import.meta.url)).then(
    (res) => res.arrayBuffer()
  );

  const barlowBold = await fetch(
    new URL("../../../assets/Barlow-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const barlowBlack = await fetch(
    new URL("../../../assets/Barlow-Black.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const interRegular = await fetch(
    new URL("../../../assets/Inter-Regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());



  const hasText = searchParams.has("text");
  const text = hasText
    ? searchParams.get("text")!
    : "Dead Space chính thức đón nhận phiên bản làm lại";

  const hasSubText = searchParams.has("subText");
  const subText = hasSubText ? searchParams.get("subText")! : "";

  const hasCategory = searchParams.has("category");
  const category = hasCategory ? searchParams.get("category")! : "";

  const hasSummary = searchParams.has("summary");
  const summary = hasSummary ? searchParams.get("summary")! : "";

  const hasScore = searchParams.has("score");
  const score = hasScore ? searchParams.get("score")! : "";

  const hasColor = searchParams.has("color");
  const color = hasColor ? searchParams.get("color")! : "#ffffff";

  const hasImage = searchParams.has("image");
  const image = hasImage
    ? searchParams.get("image")!
    : "https://d9n64ieh9hz8y.cloudfront.net/wp-content/uploads/20210723075128/dead-space-don-nhan-phien-ban-lam-lai-tin-game.jpg";

  return new ImageResponse(
    (
      <>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontFamily: "Inter",
          }}
        >
          <img
            height="1024"
            width="1024"
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              objectFit: "cover",
              filter: "brightness(0.7)",
              border: "2rem",
              borderColor: color,
            }}
            src="https://d9n64ieh9hz8y.cloudfront.net/wp-content/uploads/20210723075128/dead-space-don-nhan-phien-ban-lam-lai-tin-game.jpg"
          />
          <div
            style={{
              position: "absolute",
              top: "5rem",
              left: "5rem",
              display: "flex",
              alignItems: "center",
              justifyItems: "center",
              background: "white",
              borderRadius: "999px",
              width: "6rem",
              height: "6rem",
              padding: "1rem",
            }}
          >
            <img src={logo} />
          </div>
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontSize: "1.6rem",
                  letterSpacing: "0.25rem",
                  textTransform: "uppercase",
                  fontFamily: "Barlow Bold",
                  fontWeight: 700,
                }}
              >
                {category}
              </span>
              <h1
                style={{
                  marginTop: "0.5rem",
                  fontFamily: "Barlow Bold",
                  fontSize: "4rem",
                  fontWeight: 700,
                }}
              >
                {text}
              </h1>
              {subText && <h3>{subText}</h3>}
            </div>
          </div>
        </div>
      </>
    ),
    {
      width: 1024,
      height: 1024,
      fonts: [
        {
          name: 'Inter',
          data: interRegular,
          style: 'normal'
        },
        {
          name: 'Barlow Bold',
          data: barlowBold,
          style: 'normal',
        },
        {
          name: 'Barlow Black',
          data: barlowBlack,
          style: 'normal',
        },
      ],
    }
  );

  return new ImageResponse(
    (
      <>
        <div
          style={{
            position: "absolute",
            top: "1.5rem",
            left: "1.5rem",
            zIndex: 999,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyItems: "center",
              background: "white",
              borderRadius: "999px",
              width: "3rem",
              height: "3rem",
            }}
          >
            <img
              style={{
                height: "1.4rem",
                margin: "auto",
              }}
              src="https://vietgame.asia/wp-content/themes/deploy/public/images/vietgame-short.png?id=e5ecd15da2b22678c1bc"
            />
          </div>
        </div>
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={image}
        />
        <div
          style={{
            zIndex: 999,
            position: "absolute",
            bottom: 0,
            left: 0,
            maxWidth: "100%",
            padding: "1rem 1.5rem",
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: "0.8rem",
              letterSpacing: "0.25rem",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            {category}
          </span>
          <h2>{text}</h2>
          <h3>{subText}</h3>
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                color: "white",
              }}
            >
              <p>{summary}</p>
            </div>
            <div
              style={{
                flexShrink: 0,
                marginLeft: "1rem",
                width: "20vw",
                height: "20vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(to right top, rgb(37, 99, 235), rgb(147, 197, 253))",
                borderRadius: "999px",
              }}
            >
              <span
                style={{
                  fontWeight: 900,
                  fontSize: "3.4rem",
                  color: "white",
                }}
              >
                {score}
              </span>
            </div>
          </div>
        </div>
      </>
    ),
    {
      width: 1024,
      height: 1024,
    }
  );
}
