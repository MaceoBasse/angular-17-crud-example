// src/app/components/add-tutorial/add-tutorial.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms'; // Importez FormsModule ici
import { AddTutorialComponent } from './add-tutorial.component';
import { TutorialService } from '../../services/tutorial.service'; // Assurez-vous que le chemin est correct

describe('AddTutorialComponent', () => {
 let component: AddTutorialComponent;
 let fixture: ComponentFixture<AddTutorialComponent>;

 beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTutorialComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule // Ajoutez FormsModule ici
      ],
      providers: [TutorialService] // Assurez-vous que TutorialService est fourni
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
 });

 it('should create', () => {
    expect(component).toBeTruthy();
 });
});
