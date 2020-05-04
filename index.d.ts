interface More {
    [key: string]: any;
}
/**
 * @author Yoni Calsin <helloyonicb@gmail.com>
 * @param objects More[]
 */
declare const MergeDefault: <T extends More = More>(...objects: (More | T)[]) => T;
export { MergeDefault as Merge };
export default MergeDefault;
