import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGcefcuIcon],svg[arcticons-gcefcu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.819 18.397c1.056 2.542 4.755 4.449 6.604 6.038s1.85 2.86 1.85 4.13c1.585-3.177 3.17-6.355 2.113-8.897s-4.755-4.448-6.605-6.037s-1.85-2.86-1.85-4.131c-1.584 3.178-3.17 6.355-2.112 8.897m-6.205 10.029c1.057 2.519 4.756 4.407 6.605 5.981s1.85 2.834 1.85 4.093c1.584-3.148 3.17-6.296 2.113-8.815s-4.756-4.407-6.605-5.981s-1.85-2.834-1.85-4.093c-1.584 3.148-3.17 6.296-2.113 8.815"></svg:path><svg:circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsGcefcuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
