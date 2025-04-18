import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconTasklistIcon],svg[octicon-tasklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M15.41 9H7.59C7 9 7 8.59 7 8c0-.59 0-1 .59-1h7.81c.59 0 .59.41.59 1c0 .59 0 1-.59 1h.01zM9.59 4C9 4 9 3.59 9 3c0-.59 0-1 .59-1h5.81c.59 0 .59.41.59 1c0 .59 0 1-.59 1H9.59zM0 3.91l1.41-1.3L3 4.2L7.09 0L8.5 1.41L3 6.91l-3-3zM7.59 12h7.81c.59 0 .59.41.59 1c0 .59 0 1-.59 1H7.59C7 14 7 13.59 7 13c0-.59 0-1 .59-1z" fill="currentColor"></svg:path>`,
})
export class OcticonTasklistIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
