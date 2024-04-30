// src/app/components/tutorial-details/tutorial-details.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TutorialDetailsComponent } from './tutorial-details.component';
import { TutorialService } from '../../services/tutorial.service'; // Assurez-vous que le chemin est correct

describe('TutorialDetailsComponent', () => {
  let component: TutorialDetailsComponent;
  let fixture: ComponentFixture<TutorialDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorialDetailsComponent],
      imports: [HttpClientTestingModule], // Ajoutez HttpClientTestingModule ici
      providers: [TutorialService], // Assurez-vous que TutorialService est fourni
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
