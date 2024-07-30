import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type Props = {
  index: number;
  removeMenuItem: () => void;
}

const MenuItemInput = ({ index, removeMenuItem}: Props) => {
  const { control } = useFormContext();
  
  return(
    <div className="flex flex-row items-end gap-2">
        {/* FormField para el nombre del ítem del menú */}
        <FormField 
            control={control} 
            name={`menuItems.${index}.name`} 
            render={({field}) => (
                // render prop: define cómo se renderiza este campo
                // field contiene propiedades y métodos para manejar el input (value, onChange, etc.)
                <FormItem>
                    <FormLabel className="flex items-center gap-1">
                        Name <FormMessage />
                    </FormLabel>
                    <FormControl>
                        <Input 
                            {...field} // Spread de las propiedades de field (value, onChange, etc.)
                            placeholder="Cheese Pizza"
                            className="bg-white"
                        />
                    </FormControl>
                </FormItem>
            )}
        />
        {/* FormField para el precio del ítem del menú */}
        <FormField 
            control={control} 
            name={`menuItems.${index}.price`} 
            render={({field}) => (
                // Similar al FormField anterior, pero para el precio
                <FormItem>
                    <FormLabel className="flex items-center gap-1">
                        Price (S/.) <FormMessage />
                    </FormLabel>
                    <FormControl>
                        <Input 
                            {...field}
                            placeholder="15.90"
                            className="bg-white"
                        />
                    </FormControl>
                </FormItem>
            )}
        />
        <Button type="button" onClick={removeMenuItem} className="bg-red-500 max-h-fit">
            Remove
        </Button>  
    </div>
  )
}

export default MenuItemInput;