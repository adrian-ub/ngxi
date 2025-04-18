import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsMoreAltIcon],svg[lineicons-more-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10.9" cy="32" r="8" fill="currentColor"></svg:circle><svg:circle cx="32" cy="32" r="8" fill="currentColor"></svg:circle><svg:circle cx="53.1" cy="32" r="8" fill="currentColor"></svg:circle>`,
})
export class LineiconsMoreAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
