import { getNewsDetail } from "@/app/_libs/microcms";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  if (!params?.slug) {
    return <div>Invalid parameter</div>;
  }

  const data = await getNewsDetail(params.slug);

  return <div>{data?.title || "No title available"}</div>;
}
