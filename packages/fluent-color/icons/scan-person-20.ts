import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorScanPerson20Icon],svg[fluent-color-scan-person-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorScanPerson200)" d="M4 16a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1H4z"></svg:path><svg:path fill="url(#fluentColorScanPerson201)" d="M4 16a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1H4z"></svg:path><svg:path fill="url(#fluentColorScanPerson202)" d="M10 12a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path><svg:path fill="url(#fluentColorScanPerson203)" fill-rule="evenodd" d="M4.5 4a.5.5 0 0 0-.5.5V7a1 1 0 0 1-2 0V4.5A2.5 2.5 0 0 1 4.5 2H7a1 1 0 0 1 0 2zM12 3a1 1 0 0 1 1-1h2.5A2.5 2.5 0 0 1 18 4.5V7a1 1 0 1 1-2 0V4.5a.5.5 0 0 0-.5-.5H13a1 1 0 0 1-1-1m-9 9a1 1 0 0 1 1 1v2.5a.5.5 0 0 0 .5.5H7a1 1 0 1 1 0 2H4.5A2.5 2.5 0 0 1 2 15.5V13a1 1 0 0 1 1-1m14 0a1 1 0 0 1 1 1v2.5a2.5 2.5 0 0 1-2.5 2.5H13a1 1 0 1 1 0-2h2.5a.5.5 0 0 0 .5-.5V13a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorScanPerson200" x1="6.854" x2="7.373" y1="14.399" y2="17.716" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorScanPerson201" x1="10" x2="10.714" y1="13.643" y2="18.982" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#885EDB" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#E362F8"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorScanPerson202" x1="8.165" x2="11.732" y1="5.931" y2="11.627" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorScanPerson203" x1="1.368" x2="13.914" y1=".66" y2="20.927" gradientUnits="userSpaceOnUse"><svg:stop offset=".015" stop-color="#3DCBFF"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorScanPerson20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
