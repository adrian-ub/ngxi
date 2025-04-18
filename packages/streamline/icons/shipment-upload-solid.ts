import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShipmentUploadSolidIcon],svg[streamline-shipment-upload-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.375 0H3.489a2.19 2.19 0 0 0-1.874 1.195L0 4.308v.016h6.375zM0 12.923V5.574h14v7.35A1.077 1.077 0 0 1 12.923 14H1.077A1.077 1.077 0 0 1 0 12.923m14-8.615v.016H7.625V0h2.886a2.19 2.19 0 0 1 1.928 1.195zm-7.625 7.538a.625.625 0 1 0 1.25 0V9.843h.849a.526.526 0 0 0 .372-.898L7.372 7.47a.526.526 0 0 0-.744 0L5.154 8.945a.526.526 0 0 0 .372.898h.849z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShipmentUploadSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
