import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShipmentAddSolidIcon],svg[streamline-shipment-add-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.375 0H3.489a2.19 2.19 0 0 0-1.874 1.195L0 4.308v.016h6.375zM0 12.923V5.574h14v7.35A1.077 1.077 0 0 1 12.923 14H1.077A1.077 1.077 0 0 1 0 12.923m14-8.615v.016H7.625V0h2.886a2.19 2.19 0 0 1 1.928 1.195zM7 6.5a.75.75 0 0 1 .75.75V9H9.5a.75.75 0 0 1 0 1.5H7.75v1.75a.75.75 0 0 1-1.5 0V10.5H4.5a.75.75 0 0 1 0-1.5h1.75V7.25A.75.75 0 0 1 7 6.5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShipmentAddSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
