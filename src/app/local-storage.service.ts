import { Injectable, Inject } from '@angular/core';

@Injectable()
export class LocalStorageService {
    private storage: Storage;
    constructor() { 
        this.storage = localStorage;
    }
    public put(key: any, value: any) {
        return this.storage.setItem(key.toString(), JSON.stringify(value));
    }
    
    public get(key: any) {
        let result = this.storage.getItem(key.toString());
        if (result == null) {
            return result;
        }
        return JSON.parse(result);
    }
    
    public delete(key: any): void {
        this.storage.removeItem(key.toString());
    }
}
