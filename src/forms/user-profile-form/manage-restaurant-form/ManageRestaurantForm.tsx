import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import CuisinesSection from "./CuisinesSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/LoadingButton";

const formSchema = z.object({
    restaurantName: z.string({
        required_error: "Restaurant name is required",
    }),
    city: z.string({
        required_error: "City is required",
    }),
    country: z.string({
        required_error: "Country is required",
    }),
    deliveryPrice: z.coerce.number({
        required_error: "Delivery price is required",
        invalid_type_error: "Delivery price must be a number",
    }),
    estimateDeliveryTime: z.coerce.number({
        required_error: "Estimate delivery time is required",
        invalid_type_error: "Estimate delivery time must be a number",
    }),
    cuisines: z.array(z.string()).nonempty({
        message: "At least one cuisine is required",
    }),
    menuItems: z.array(z.object({
        name: z.string().min(1, "Name is required"),
        price: z.coerce.number().min(1, "Price is required"),
    })),
    imageFile: z.instanceof(File, {message: "Image is required"}),
})

type restaurantFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
}

const ManageRestaurantForm = ({onSave, isLoading}: Props) => {
  const form = useForm<restaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        cuisines: [],
        menuItems: [{ name: "", price: 0}],
    },
  });

  const onSubmit = (formDataJson: restaurantFormData) => {

  }

  return (
    <Form {...form}>
        <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 bg-gray-50 p-10 rounded-lg"
        > 
            <DetailsSection />
            <Separator />
            <CuisinesSection />
            <Separator />
            <MenuSection />
            <Separator />
            <ImageSection />
            {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
        </form>
    </Form>
  )
}

export default ManageRestaurantForm;