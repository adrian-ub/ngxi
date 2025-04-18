import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsModemIcon],svg[pixelarticons-modem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2h-8v2H9v2h2V4h8v2h2V4h-2zm-8 6h2v2h-2zm6 0V6h-4v2zm0 0h2v2h-2zm-1 2h-2v2H2v10h20V12h-6zm4 4v6H4v-6zm-2 2h-2v2h2zm-6 0h2v2h-2z"></svg:path>`,
})
export class PixelarticonsModemIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
