import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVespucciIcon],svg[arcticons-vespucci-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40 40c1-1 0-3 1-6s-1-5.8-1-8.62C40 23.38 17 39 14 41c3.31 1 4 1 6 0c3.22-1.61 6 0 8 1s9 0 12-2m-23-6l23-12c2-1 1-3 2-5s-.62-8-1.62-11c-3.85.55-2.38.33-8.38 2c-4.09 1.14-2-3.58-10-1.58c-4 1-4.12 1.28-6.37 1.58c.03 2 1.37 26 1.37 26M5.46 6c2.07 3 4.05 8.56 2.05 11.56S6.55 25 7.55 28C8.69 31.42 6 37 6 41c2.5.49 2.47 0 6 0l1.45-33.33S9.46 5 5.46 6"></svg:path>`,
})
export class ArcticonsVespucciIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
