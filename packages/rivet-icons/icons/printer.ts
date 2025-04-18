import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsPrinterIcon],svg[rivet-icons-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M13 0H3v4H0v9h3v3h10v-3h3V4h-3zm-2 4H5V2h6zm0 10H5v-2h6zm-9-3V6h12v5h-1v-1H3v1z"></svg:path></svg:g>`,
})
export class RivetIconsPrinterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
