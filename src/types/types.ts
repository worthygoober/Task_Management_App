export interface Task {
    id: string; //React Router parameters and JSON APIs usually handle IDs as strings.
    title: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed';
    createdAt: any;
    updatedAt?: any;
}