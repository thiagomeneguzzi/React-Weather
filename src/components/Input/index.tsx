interface Props {
    label: string;
    [x: string]: any;
}

export function Input({label,... rest}: Props) {
    return (
        <div className="max-w-sm w-auto flex flex-col">
            <label 
                className="font-bold text-xl"
                htmlFor={label}>{label}</label>
            <input 
                className="rounded-md text-gray-900 border-gray-500 border-2 outline-none pl-2 h-10"
                id={label} 
                {... rest} />
        </div>
    )
}