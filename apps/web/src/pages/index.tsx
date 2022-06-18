import Link from "next/link";

import { PATH } from "@/common/constants";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Link href={PATH.LOGIN}>로그인</Link>
    </div>
  );
}
