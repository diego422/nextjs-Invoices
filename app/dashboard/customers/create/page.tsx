import Form from '@/app/ui/customers/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/Customers' },
          {
            label: 'Create Customers',
            href: '/dashboard/Customers/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}