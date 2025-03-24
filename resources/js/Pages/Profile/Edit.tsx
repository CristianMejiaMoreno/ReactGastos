import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    {/* Form: Update Profile Information */}
                    <div className="bg-indigo-100 p-4 sm:rounded-lg sm:p-8">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-full sm:max-w-xl"
                        />
                    </div>

                    {/* Form: Update Password */}
                    <div className="bg-indigo-100 p-4 sm:rounded-lg sm:p-8">
                        <UpdatePasswordForm className="max-w-full sm:max-w-xl" />
                    </div>

                    {/* Form: Delete Account */}
                    <div className="bg-indigo-100 p-4 sm:rounded-lg sm:p-8 pb-20"> {/* Padding bottom para más espacio interno */}
                        <DeleteUserForm className="max-w-full sm:max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
