import { TestBed, inject } from '@angular/core/testing';

import { TimerDataStorageService } from './timer-data-storage.service';

describe('TimerDataStorageServiceService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TimerDataStorageService]
        });
    });

    it('should be created', inject([TimerDataStorageService], (service: TimerDataStorageService) => {
        expect(service).toBeTruthy();
    }));
});
