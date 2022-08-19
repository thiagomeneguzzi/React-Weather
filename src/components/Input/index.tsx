interface Props {
    label: string;
    [x: string]: any;
}

export function Input({label,... rest}: Props) {
    return (
        <div className="max-w-sm w-auto flex flex-col">
            <label 
                className="font-bold"
                htmlFor={label}>{label}</label>
            <input 
                className="rounded-sm border-gray-400 border outline-none pl-2 h-8"
                id={label} 
                {... rest} />
        </div>
    )
}