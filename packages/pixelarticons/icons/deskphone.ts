import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDeskphoneIcon],svg[pixelarticons-deskphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v18H3zm2 2v6h8V5zm10 0v14h4V5zm-2 14v-2h-3v2zm-5 0v-2H5v2zm-3-4h3v-2H5zm5-2v2h3v-2z"></svg:path>`,
})
export class PixelarticonsDeskphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
