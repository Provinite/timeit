import { TestBed, inject } from '@angular/core/testing';

import { TimeSourceService } from './time-source.service';

describe('TimeSourceService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TimeSourceService]
        });
    });

    it('should be created', inject([TimeSourceService], (service: TimeSourceService) => {
        expect(service).toBeTruthy();
    }));
});
