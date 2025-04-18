import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineReceiptAddSolidIcon],svg[streamline-receipt-add-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11a.5.5 0 0 0 .757.429L3 12.583l2.243 1.346a.5.5 0 0 0 .514 0L8 12.583l2.243 1.346A.5.5 0 0 0 11 13.5V6h.005V2.5a.625.625 0 1 1 1.25 0V6H13.5a.5.5 0 0 0 .5-.5V2a2 2 0 0 0-2-2zm3 3.25a.75.75 0 0 1 .75.75v1.75H8a.75.75 0 0 1 0 1.5H6.25V9a.75.75 0 0 1-1.5 0V7.25H3a.75.75 0 0 1 0-1.5h1.75V4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineReceiptAddSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
