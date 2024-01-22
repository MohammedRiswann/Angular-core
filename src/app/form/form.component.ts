import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  //   @ViewChild('myForm') data!: NgForm;
  //   onSubmit() {
  //     console.log(this.data);
  //   }
  //   ngOnInit() {
  //     console.log(this.data);
  //   }
  //   ngAfterViewInit() {
  //     console.log(this.data.controls['name'].touched);
  //   }
  // Reactive form
  //   myForm!: FormGroup; // <-- Correct type declaration
  //   email: any;
  //   constructor(private fb: FormBuilder) {}
  //   ngOnInit(): void {
  //     // Fix the syntax issue and properly initialize the form
  //     this.myForm = this.fb.group({
  //       name: ['', [Validators.required, Validators.minLength(5)]],
  //       email: ['', [Validators.required, Validators.email]],
  //     });
  //   }
  //   onSubmit() {
  //     if (this.myForm.valid) {
  //       console.log('Form submitted:', this.myForm.value);
  //     }
  //   }
  // File upload

//   upload!: FormGroup;
//   constructor(private fb: FormBuilder) {}
//   ngOnInit() {
//     this.upload = this.fb.group({
//       File: [''],
//     });
//   }
//   changing(event: any) {
//     console.log(event.target.files[0]);
//     const files = event.target.files[0];
//     if (files) {
//       const fileName = files.name;
//       console.log(fileName);
//       const formData = new FormData();
//       formData.append('sudais image', files);
//       console.log(formData);
//       this.upload.patchValue({
//         file: files,
//       });
//     }
//     console.log(event);
//   }
//   submitted() {
//     console.log(this.upload);
//   }
// }
