import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCamscannerIcon],svg[arcticons-camscanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9 5a4 4 0 0 0-4 4v30a4 4 0 0 0 4 4h30a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4zM5 34.533h38"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.809 26.972c1.042 1.357 2.348 1.862 4.167 1.862h2.516a4.244 4.244 0 0 0 4.24-4.249h0a4.244 4.244 0 0 0-4.24-4.249h-2.78a4.244 4.244 0 0 1-4.24-4.248h0a4.244 4.244 0 0 1 4.24-4.25h2.516c1.818 0 3.125.506 4.167 1.863m-15.867 9.434v.07a5.63 5.63 0 0 1-5.63 5.629h0a5.63 5.63 0 0 1-5.63-5.63v-5.736a5.63 5.63 0 0 1 5.63-5.63h0a5.63 5.63 0 0 1 5.63 5.63v.07"></svg:path>`,
})
export class ArcticonsCamscannerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
