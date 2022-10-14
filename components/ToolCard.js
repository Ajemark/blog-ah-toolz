
import Link from "@/components/Link"
import Image from "@/components/Image"


const ToolCard = ({ text, src, href }) => {
    return (
        <div>
            <div className="shadow-lg border-2 rounded mt-4">
                <Link
                    href={href}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 " >
                    <div className="flex p-4">
                        <Image width={70} height={70} alt="tool image" className="rounded-lg px-2 py-1 w-20  " src={src} />
                        <p className="text-align-center  text-lg dark:text-gray-400 px-4 w-full ">
                            {text}
                        </p>

                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ToolCard