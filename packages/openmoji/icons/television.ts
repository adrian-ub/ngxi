import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiTelevisionIcon],svg[openmoji-television-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9B9B9A" d="M5.263 15.737L4.5 56h62.173L67 16z"></svg:path><svg:path fill="#3F3F3F" d="M9 20h54v26H9z"></svg:path><svg:path fill="#FFF" d="M63 46V20l-14.674-.324l8.902 26.06z"></svg:path><svg:path fill="#9B9B9A" d="m34.272 60.958l-.21 5.894l4.544.106l.195-6.689s-.854-1.3-.301-1.3h-4c.553 0-.228 1.989-.228 1.989"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M5 16h62v40H5z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M50.923 66.852H22.077"></svg:path><svg:circle cx="36.5" cy="51" r="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M9 20h54v26H9zm29.5 39.968v6.386m-4-6.386v6.386"></svg:path>`,
})
export class OpenmojiTelevisionIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
