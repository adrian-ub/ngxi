import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMinusCircleIcon],svg[jam-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10M5 9h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamMinusCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
