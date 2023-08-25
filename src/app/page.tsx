import Image from "next/image";
import styles from "./page.module.css";
import { Input } from "@/app/forward-ref-example";

export default function Home() {
	const items = [1, 2, 3, 4];

	const list = items.map((k) => <div key={k}>hello</div>);

	return (
		<main className={styles.main}>
			<Input />
		</main>
	);
}
