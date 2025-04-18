import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPrinterOffIcon],svg[tabler-printer-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.412 16.416c.363-.362.588-.863.588-1.416v-4a2 2 0 0 0-2-2h-6M9 9H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2m10-8V5a2 2 0 0 0-2-2H9c-.551 0-1.05.223-1.412.584M7 7v2"></svg:path><svg:path d="M17 17v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerPrinterOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
