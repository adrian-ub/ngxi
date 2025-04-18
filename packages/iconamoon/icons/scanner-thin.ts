import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonScannerThinIcon],svg[iconamoon-scanner-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20 12H4m12-8h2a2 2 0 0 1 2 2v2M8 20H6a2 2 0 0 1-2-2v-2m16 0v2a2 2 0 0 1-2 2h-2M4 8V6a2 2 0 0 1 2-2h2"></svg:path>`,
})
export class IconamoonScannerThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
