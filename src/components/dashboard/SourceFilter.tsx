import { Source } from "@/data/mockData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SourceFilterProps {
  value: Source;
  onChange: (value: Source) => void;
  options?: Source[];
}

const defaultOptions: Source[] = ["All", "EDR", "NDR", "WAF", "Firewall"];

export function SourceFilter({ value, onChange, options = defaultOptions }: SourceFilterProps) {
  return (
    <Select value={value} onValueChange={(v) => onChange(v as Source)}>
      <SelectTrigger className="w-[100px] h-7 text-xs bg-muted border-border">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-popover border-border">
        {options.map((option) => (
          <SelectItem key={option} value={option} className="text-xs">
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
