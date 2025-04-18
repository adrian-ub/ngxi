import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSupersportsIcon],svg[arcticons-supersports-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.942 15.61c3.694 7.015-.195 12.358-6.549 15.344C13.928 36.34.356 38.82 5.7 39.252c20.974 1.692 55.99-10.998 26.242-23.641"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.058 32.39c-3.694-7.015.195-12.358 6.549-15.343C34.072 11.659 47.644 9.18 42.3 8.748C21.326 7.056-13.69 19.746 16.058 32.39"></svg:path>`,
})
export class ArcticonsSupersportsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
