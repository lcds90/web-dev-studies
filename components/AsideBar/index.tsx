import { useRouter } from "next/router"

type AsideBarProps = {
    topics: Topic[];
}

type Topic = {
    name: string;
    link: string;
}

export function AsideBar({topics}: AsideBarProps) {
    const router = useRouter()
    return (
            <ul>
                {topics.map((topic) => <li key={topic.name} >
                    <button type="button" onClick={() => router.push(`${topic.link}`)}>
                        {topic.name}
                    </button>
                </li>)}
            </ul>
    )
}
