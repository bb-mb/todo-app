import { PATH } from "@/common/constants";
import Link from "next/link";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Link href={PATH.LOGIN}>로그인</Link>
    </div>
  );
}
