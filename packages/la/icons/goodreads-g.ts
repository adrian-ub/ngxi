import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laGoodreadsGIcon],svg[la-goodreads-g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-4.411 0-8 4.262-8 9.5s3.589 9.5 8 9.5c2.39 0 4.533-1.257 6-3.236V22c0 2.757-2.691 5-6 5c-2.455 0-4.567-1.236-5.494-3H8.338c.986 2.887 4.045 5 7.662 5c4.411 0 8-3.141 8-7V4h-2v2.236C20.533 4.257 18.39 3 16 3m0 2c3.309 0 6 3.364 6 7.5S19.309 20 16 20s-6-3.364-6-7.5S12.691 5 16 5"></svg:path>`,
})
export class LaGoodreadsGIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
