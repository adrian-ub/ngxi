import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorScanType24Icon],svg[fluent-color-scan-type-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#212121" d="M6.75 8a1 1 0 0 1 1-1h8.5a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V9H13v6h1.25a1 1 0 1 1 0 2h-4.5a1 1 0 1 1 0-2H11V9H8.75v.5a1 1 0 1 1-2 0z"></svg:path><svg:path fill="url(#fluentColorScanType240)" d="M6.75 8a1 1 0 0 1 1-1h8.5a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V9H13v6h1.25a1 1 0 1 1 0 2h-4.5a1 1 0 1 1 0-2H11V9H8.75v.5a1 1 0 1 1-2 0z"></svg:path><svg:path fill="url(#fluentColorScanType241)" fill-rule="evenodd" d="M4.5 4a.5.5 0 0 0-.5.5V8a1 1 0 0 1-2 0V4.5A2.5 2.5 0 0 1 4.5 2H8a1 1 0 0 1 0 2zM15 3a1 1 0 0 1 1-1h3.5A2.5 2.5 0 0 1 22 4.5V8a1 1 0 1 1-2 0V4.5a.5.5 0 0 0-.5-.5H16a1 1 0 0 1-1-1M3 15a1 1 0 0 1 1 1v3.5a.5.5 0 0 0 .5.5H8a1 1 0 1 1 0 2H4.5A2.5 2.5 0 0 1 2 19.5V16a1 1 0 0 1 1-1m18 0a1 1 0 0 1 1 1v3.5a2.5 2.5 0 0 1-2.5 2.5H16a1 1 0 1 1 0-2h3.5a.5.5 0 0 0 .5-.5V16a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorScanType240" x1="5.824" x2="16.468" y1="5.75" y2="18.126" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0094F0"></svg:stop><svg:stop offset=".535" stop-color="#0078D4"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorScanType241" x1="1.21" x2="16.893" y1=".325" y2="25.659" gradientUnits="userSpaceOnUse"><svg:stop offset=".015" stop-color="#3DCBFF"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorScanType24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
