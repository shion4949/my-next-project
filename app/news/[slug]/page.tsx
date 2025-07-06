import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import styles from "./page.module.css";
import ButtonLink from "@/app/_components/ButtonLink";
import { notFound } from "next/navigation";

/*type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params}: Props) {
  console.log("params.slug:", params.slug);
  const data = await getNewsDetail(params.slug);

  return<div>{data.title}</div>
}*/

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const slug = params.slug; // ★ ここで一旦変数に取り出す
  console.log("params.slug:", slug);

  const data = await getNewsDetail(slug).catch(notFound);

  return(
    <>
    <Article data = {data} />
    <div className={styles.footer}>
      <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
    </div>
    </>
  );
}

