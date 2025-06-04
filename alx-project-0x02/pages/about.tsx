import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
   <div className="p-8"
   >
     <h1 className="text-2xl font-bold mb-6">About Page</h1>

      <div className="flex gap-4 flex-wrap">
        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </div>
   </div>
  );
}
