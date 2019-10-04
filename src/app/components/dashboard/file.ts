export class FileInfo {
    id: number;
    rootCode: string;
    name: string;
    title: string;
    description: string;
    logo: string;
    isFile = false;
    parentId: number;
    hasChildren: boolean;
}
