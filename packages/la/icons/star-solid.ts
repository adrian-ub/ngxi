import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laStarSolidIcon],svg[la-star-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30.336 12.547l-10.172-1.074L16 2.133l-4.164 9.34l-10.172 1.074l7.598 6.848L7.14 29.398L16 24.29l8.86 5.11l-2.122-10.004z"></svg:path>`,
})
export class LaStarSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
