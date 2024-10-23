import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { PaisListComponent } from './pais-list.component';

describe('PaisListComponent', () => {
  let component: PaisListComponent;
  let fixture: ComponentFixture<PaisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisListComponent ],
      imports: [ CommonModule ] // Asegúrate de importar CommonModule
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
});
