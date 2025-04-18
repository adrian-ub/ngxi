import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShipmentDownloadSolidIcon],svg[streamline-shipment-download-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.375 0H3.489a2.19 2.19 0 0 0-1.874 1.195L0 4.308v.016h6.375zM0 12.923V5.574h14v7.35A1.077 1.077 0 0 1 12.923 14H1.077A1.077 1.077 0 0 1 0 12.923m14-8.615v.016H7.625V0h2.886a2.19 2.19 0 0 1 1.928 1.195zM6.375 7.705a.625.625 0 0 1 1.25 0v2.003h.848a.526.526 0 0 1 .372.898L7.372 12.08a.526.526 0 0 1-.744 0l-1.473-1.474a.526.526 0 0 1 .372-.898h.848z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShipmentDownloadSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
