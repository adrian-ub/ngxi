import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixUserReadingReadingIcon],svg[ix-user-reading-reading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 192v213.333q-106.667 0-192 64q-85.334-64-192-64V192q106.667 0 192 64q85.333-64 192-64M256 53.333c41.237 0 74.667 33.43 74.667 74.667s-33.43 74.666-74.667 74.666s-74.667-33.43-74.667-74.666c0-41.238 33.43-74.667 74.667-74.667"></svg:path>`,
})
export class IxUserReadingReadingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
