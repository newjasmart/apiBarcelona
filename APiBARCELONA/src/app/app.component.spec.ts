import { TestBed } from '@angular/core/testing';
import { provideRouter, Router, RouterLinkWithHref } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

let router: Router;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideRouter(routes)
      ],
      imports: [AppComponent],
    }).compileComponents();

    router = TestBed.inject(Router);
    router.initialNavigation();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'APiBARCELONA' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('APiBARCELONA');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('APiBARCELONA');
  });

   // Prueba 1: Debería navegar a la ruta 'pais-list'
   it('Navigates to /pais-list option', async () => {
    

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const linkDebugs:DebugElement[] = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    const link:HTMLAnchorElement=linkDebugs[0].nativeElement as HTMLAnchorElement;

    link.click();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(router.url).toBe("/pais-list");
  });
});