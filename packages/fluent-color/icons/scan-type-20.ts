import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorScanType20Icon],svg[fluent-color-scan-type-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorScanType200)" fill-rule="evenodd" d="M8 8a1 1 0 0 1-2 0v-.75C6 6.56 6.56 6 7.25 6h5.5c.69 0 1.25.56 1.25 1.25V8a1 1 0 1 1-2 0h-1v4h.5a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2H9V8z" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorScanType201)" fill-rule="evenodd" d="M4.5 4a.5.5 0 0 0-.5.5V7a1 1 0 0 1-2 0V4.5A2.5 2.5 0 0 1 4.5 2H7a1 1 0 0 1 0 2zM12 3a1 1 0 0 1 1-1h2.5A2.5 2.5 0 0 1 18 4.5V7a1 1 0 1 1-2 0V4.5a.5.5 0 0 0-.5-.5H13a1 1 0 0 1-1-1m-9 9a1 1 0 0 1 1 1v2.5a.5.5 0 0 0 .5.5H7a1 1 0 1 1 0 2H4.5A2.5 2.5 0 0 1 2 15.5V13a1 1 0 0 1 1-1m14 0a1 1 0 0 1 1 1v2.5a2.5 2.5 0 0 1-2.5 2.5H13a1 1 0 1 1 0-2h2.5a.5.5 0 0 0 .5-.5V13a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorScanType200" x1="5.294" x2="13.862" y1="5" y2="14.487" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0094F0"></svg:stop><svg:stop offset=".535" stop-color="#0078D4"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorScanType201" x1="1.368" x2="13.914" y1=".66" y2="20.927" gradientUnits="userSpaceOnUse"><svg:stop offset=".015" stop-color="#3DCBFF"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorScanType20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
