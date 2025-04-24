'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
};

export default function ProductList() {

  const router = useRouter();

  const [products, setProducts] = useState<Product[]>([]);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);

  const fetchProducts = async () => {
    try {
      const res = await fetch('https://frontend-test.lamptechs.com/api/v1/user/product/list');
      const data = await res.json();
      setProducts(data.data || []);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmed = confirm('Are you sure you want to delete this product?');
    if (!confirmed) return;

    try {
      await fetch(`https://frontend-test.lamptechs.com/api/v1/user/product/delete/${id}`, {
        method: 'DELETE',
      });
      fetchProducts(); 
    } catch (error) {
      console.error('Failed to delete:', error);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editProduct) return;

    try {
      await fetch('https://frontend-test.lamptechs.com/api/v1/user/product/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editProduct),
      });
      setShowForm(false);
      setEditProduct(null);
      fetchProducts();
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editProduct) {
      setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-6">
      <div className="justify-between items-center mb-6 gap-8">
          <h2 className="text-3xl font-semibold">Products</h2>
          <div className="flex gap-2 mt-6">
            <input
              type="text"
              placeholder="Search Products"
              className="border border-[#ED5C01] px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              onClick={() => router.push('/add-products')}
              className="bg-[#ED5C01] text-white px-4 py-2 rounded-md hover:bg-orange-800"
            >
              Add New +
            </button>
          </div>
        </div>
        <div className="overflow-auto">
          <table className="min-w-full border border-gray-200 bg-white">
 <thead className="bg-[#062D3E] text-left text-sm font-semibold text-gray-200">
              <tr>
                <th className="px-4 py-3 border-b">Product Name</th>
                <th className="px-4 py-3 border-b">Price</th>
                <th className="px-4 py-3 border-b">Details</th>
                <th className="px-4 py-3 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="text-sm text-gray-800">
                  <td className="px-4 py-3 border-b">{product.name}</td>
                  <td className="px-4 py-3 border-b">{product.price}</td>
                  <td className="px-4 py-3 border-b">{product.description}</td>
                  <td className="px-4 py-3 border-b">
                    <div className="flex space-x-4">
                      <FaEdit
                        className="text-blue-500 cursor-pointer"
                        onClick={() => {
                          setEditProduct(product);
                          setShowForm(true);
                        }}
                      />
                      <FaTrash
                        className="text-red-500 cursor-pointer"
                        onClick={() => handleDelete(product.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Update Form Modal */}
        {showForm && editProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <form
              onSubmit={handleUpdate}
              className="bg-white p-6 rounded-lg w-[400px] shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">Edit Product</h3>
              <input
                type="text"
                name="name"
                value={editProduct.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="text"
                name="price"
                value={editProduct.price}
                onChange={handleChange}
                placeholder="Price"
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="text"
                name="description"
                value={editProduct.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full mb-2 p-2 border rounded"
              />
              <div className="flex justify-between mt-4">
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                  onClick={() => {
                    setShowForm(false);
                    setEditProduct(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
