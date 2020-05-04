interface More {
    [key: string]: any;
}
declare const MergeDefault: <T extends More = More>(...objects: (More | T)[]) => T;
export { MergeDefault as Merge };
export default MergeDefault;
