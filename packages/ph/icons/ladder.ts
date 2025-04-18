import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLadderIcon],svg[ph-ladder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.52 213.26L164.51 73l9.09-25H184a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h4.58l-60.1 165.26a8 8 0 0 0 4.79 10.26A8.1 8.1 0 0 0 40 224a8 8 0 0 0 7.52-5.27L57.24 192h47l-7.74 21.26a8 8 0 0 0 4.79 10.26a8.1 8.1 0 0 0 2.71.48a8 8 0 0 0 7.52-5.27L130 168h52l18.45 50.73A8 8 0 0 0 208 224a8.1 8.1 0 0 0 2.73-.48a8 8 0 0 0 4.79-10.26m-88-85.26h-47l11.63-32h47Zm29.09-80l-11.67 32H98l11.6-32ZM63.06 176l11.64-32h47L110 176Zm72.72-24L156 96.41L176.21 152Z"></svg:path>`,
})
export class PhLadderIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
