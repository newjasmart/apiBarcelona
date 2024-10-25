import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaisListComponent } from './pais-list.component';

describe('PaisListComponent', () => {
  let component: PaisListComponent;
  let fixture: ComponentFixture<PaisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Prova 2: Debería mostrar la lista de países
  it('should display the list of countries', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const countryList = compiled.querySelectorAll('.country-item'); 
    expect(countryList.length).toBeGreaterThan(0);
  });

  
});