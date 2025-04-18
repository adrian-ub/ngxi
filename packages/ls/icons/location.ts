import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsLocationIcon],svg[ls-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M333 702L666 0L0 356h333z"></svg:path>`,
})
export class LsLocationIcon {
  readonly viewBox = input("0 0 666 702")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
