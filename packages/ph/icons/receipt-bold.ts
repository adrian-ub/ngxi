import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phReceiptBoldIcon],svg[ph-receipt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M68 100a12 12 0 0 1 12-12h96a12 12 0 0 1 0 24H80a12 12 0 0 1-12-12m12 52h96a12 12 0 0 0 0-24H80a12 12 0 0 0 0 24m156-96v152a12 12 0 0 1-17.37 10.73L192 205.42l-26.63 13.31a12 12 0 0 1-10.74 0L128 205.42l-26.63 13.31a12 12 0 0 1-10.74 0L64 205.42l-26.63 13.31A12 12 0 0 1 20 208V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20m-24 4H44v128.58l14.63-7.31a12 12 0 0 1 10.74 0L96 194.58l26.63-13.31a12 12 0 0 1 10.74 0L160 194.58l26.63-13.31a12 12 0 0 1 10.74 0l14.63 7.31Z"></svg:path>`,
})
export class PhReceiptBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
