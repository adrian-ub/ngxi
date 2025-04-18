import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBarcodeOffIcon],svg[tabler-barcode-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7V6c0-.552.224-1.052.586-1.414M4 17v1a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v1m-4 13h2c.551 0 1.05-.223 1.412-.584M5 11h1v2H5zm5 0v2m5-2v.01m4-.01v2M3 3l18 18"></svg:path>`,
})
export class TablerBarcodeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
