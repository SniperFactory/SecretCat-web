export default function SecretCard({secretObject}){
    return <>
    <article className="py-8 px-4 rounded flex flex-col text-center text-white gap-8">
        <label className="text-xs text-neutral-500">#{secretObject['id']}</label>
        <h6 className="font-semibold text-3xl mt-2">{secretObject['secret']}</h6>
        <h2 className="text-sm mt-2"> { secretObject['isAnonymous'] && "- 알수없는 누군가가"}</h2>
    </article>
    </>
}
// deprecated