import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMessageDotsIcon],svg[bx-message-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.766L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-7.277L9 18.234V16H4V4h16z"></svg:path><svg:circle cx="15" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="9" cy="10" r="2" fill="currentColor"></svg:circle>`,
})
export class BxMessageDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
