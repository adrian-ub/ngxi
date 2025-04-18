import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laParkingIcon],svg[la-parking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5v22h20V5zm2 2h16v18H8zm4 3v12h2v-3h3c1.645 0 3-1.355 3-3v-3c0-1.645-1.355-3-3-3zm2 2h3c.566 0 1 .434 1 1v3c0 .566-.434 1-1 1h-3z"></svg:path>`,
})
export class LaParkingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
