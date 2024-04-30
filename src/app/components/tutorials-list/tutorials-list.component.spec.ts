// src/app/components/tutorials-list/tutorials-list.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TutorialsListComponent } from './tutorials-list.component';
import { TutorialService } from '../../services/tutorial.service'; // Assurez-vous que le chemin est correct

describe('TutorialsListComponent', () => {
  let component: TutorialsListComponent;
  let fixture: ComponentFixture<TutorialsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorialsListComponent],
      imports: [HttpClientTestingModule], // Ajoutez HttpClientTestingModule ici
      providers: [TutorialService], // Assurez-vous que TutorialService est fourni
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
