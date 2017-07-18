export interface StorageHandler<K, V> {
    save(id: K, data: V): void;
    load(id: K): V;
}
