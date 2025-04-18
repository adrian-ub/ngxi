import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGuitarIcon],svg[arcticons-guitar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:circle cx="24" cy="24" r="9.085" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.15 5.5v13.871m15.7-5.011c2.8 2.28 4.58 5.75 4.58 9.64c0 6.87-5.56 12.43-12.43 12.43S11.57 30.87 11.57 24c0-3.89 1.78-7.36 4.58-9.64m15.7-8.86v13.871M20.518 5.5v37m2.321-37v37m2.322-37v37m2.321-37v37m2.321 0v-37m-11.606 0v37"></svg:path>`,
})
export class ArcticonsGuitarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
