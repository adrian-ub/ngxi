import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJournieIcon],svg[arcticons-journie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.21 10.784q.538.442 1.041.946c5.665 5.665 5.665 14.851 0 20.516h0L24.993 42.504l-1.985-1.985m-3.144-13.401a7.253 7.253 0 0 1 9.17-11.155"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="m23.007 30.261l-3.144-3.144"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.265 30.261L23.007 40.519L12.749 30.261c-5.665-5.665-5.665-14.851 0-20.516s14.85-5.665 20.516 0s5.665 14.851 0 20.516"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.136 25.132l-5.13 5.13l-5.128-5.13a7.253 7.253 0 1 1 10.258 0"></svg:path>`,
})
export class ArcticonsJournieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
