import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPepperIcon],svg[arcticons-pepper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.338 38.316v-5.84h1.912c1.08 0 1.957.877 1.957 1.96s-.876 1.962-1.957 1.962H9.338m9.74 1.918v-5.84h1.912c1.081 0 1.957.877 1.957 1.96s-.876 1.962-1.957 1.962h-1.912m5.325 1.918v-5.84h1.912a1.96 1.96 0 0 1 0 3.922h-1.913m9.731 1.918v-5.84h1.912c1.081 0 1.957.877 1.957 1.96s-.876 1.962-1.957 1.962h-1.912m1.912 0l1.912 1.916m-23.402-2.919h1.904m1.016 2.921h-2.92v-5.841h2.92m12.213 2.92h1.904m1.016 2.921h-2.92v-5.841h2.92"></svg:path><svg:circle cx="39.912" cy="38.106" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsPepperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
