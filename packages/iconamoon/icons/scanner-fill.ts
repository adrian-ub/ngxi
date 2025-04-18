import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonScannerFillIcon],svg[iconamoon-scanner-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 4a1 1 0 0 1 1-1h2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1M3 12a1.5 1.5 0 0 1 1.5-1.5h15a1.5 1.5 0 0 1 0 3h-15A1.5 1.5 0 0 1 3 12m5 9a1 1 0 0 0 0-2H6a1 1 0 0 1-1-1v-2a1 1 0 1 0-2 0v2a3 3 0 0 0 3 3zm12-6a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M3 8a1 1 0 0 0 2 0V6a1 1 0 0 1 1-1h2a1 1 0 1 0 0-2H6a3 3 0 0 0-3 3z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonScannerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
