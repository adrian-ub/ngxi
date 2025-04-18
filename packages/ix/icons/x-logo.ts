import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixXLogoIcon],svg[ix-x-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M296.591 223.331L455.427 42.667h-37.639L279.871 199.535L169.716 42.667H42.666l166.575 237.212L42.666 469.333h37.642l145.644-165.658l116.331 165.658h127.05L296.582 223.331zm-51.555 58.638l-16.877-23.621L93.87 70.393h57.815L260.057 222.08l16.878 23.621l140.871 197.168h-57.815l-114.955-160.89z"></svg:path>`,
})
export class IxXLogoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
