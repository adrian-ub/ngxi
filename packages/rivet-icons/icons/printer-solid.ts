import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsPrinterSolidIcon],svg[rivet-icons-printer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 0H3v4H0v9h3v3h10v-3h3V4h-3zm0 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-2-4H5V2h6zm0 10H5v-2h6z"></svg:path>`,
})
export class RivetIconsPrinterSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
