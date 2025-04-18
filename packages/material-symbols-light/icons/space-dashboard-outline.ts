import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpaceDashboardOutlineIcon],svg[material-symbols-light-space-dashboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1H11.5V5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192m6.885 0h5.885q.23 0 .423-.192t.192-.424V12h-6.5zm0-8H19V5.616q0-.231-.192-.424T18.384 5H12.5z"></svg:path>`,
})
export class MaterialSymbolsLightSpaceDashboardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
