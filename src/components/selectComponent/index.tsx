import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface SelectComponentProps {
    children: string
    options: string[]
    placeholder: string
    getFunction: (value: string) => void
}

export function SelectComponnent({ children, options, placeholder, getFunction }: SelectComponentProps) {
    return (
        <div className="space-y-1">
            <div className="space-y-1">
                <Label className="uppercase">{children}</Label>
                <Select onValueChange={(e) => getFunction(e)}>
                    <SelectTrigger>
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            options.map((opt) => {
                                return <SelectItem className="uppercase" value={opt}>{opt.toUpperCase()}</SelectItem>
                            })
                        }
                        {/* <SelectItem value="Sede">Sede</SelectItem>
                        <SelectItem value="Cidade IV">Cidade IV</SelectItem> */}
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}