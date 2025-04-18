import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowDataTransferVerticalIcon],svg[hugeicons-arrow-data-transfer-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19V6.659c0-1.006 0-1.51.309-1.634c.308-.125.672.23 1.398.941L19 8.211M9 5v12.341c0 1.006 0 1.51-.309 1.634c-.308.125-.672-.23-1.398-.941L5 15.789" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowDataTransferVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
