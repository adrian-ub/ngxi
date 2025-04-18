import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerZoomScanFilledIcon],svg[tabler-zoom-scan-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 0 2H6a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1m16 0a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1m-9-8a4 4 0 0 1 3.446 6.031l2.261 2.262a1 1 0 0 1-1.414 1.414l-2.262-2.26l-.031.017A4 4 0 0 1 7 11l.005-.2A4 4 0 0 1 11 7M8 3a1 1 0 1 1 0 2H6a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0V6a3 3 0 0 1 3-3zm10 0a3 3 0 0 1 3 3v2a1 1 0 0 1-2 0V6a1 1 0 0 0-1-1h-2a1 1 0 0 1 0-2z"></svg:path>`,
})
export class TablerZoomScanFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
