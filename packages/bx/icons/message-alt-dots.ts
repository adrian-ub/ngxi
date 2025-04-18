import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMessageAltDotsIcon],svg[bx-message-alt-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414L15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-4.414L12 18.586L9.414 16H5V4h14z"></svg:path><svg:circle cx="15" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="9" cy="10" r="2" fill="currentColor"></svg:circle>`,
})
export class BxMessageAltDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
