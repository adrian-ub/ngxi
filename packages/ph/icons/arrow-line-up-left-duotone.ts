import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpLeftDuotoneIcon],svg[ph-arrow-line-up-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m168 48l-96 96V48Z" opacity=".2"></svg:path><svg:path d="M232 208a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M64 144V48a8 8 0 0 1 8-8h96a8 8 0 0 1 5.66 13.66L131.31 96l58.35 58.34a8 8 0 0 1-11.32 11.32L120 107.31l-42.34 42.35A8 8 0 0 1 64 144m16-19.31l34.34-34.35L148.69 56H80Z"></svg:path></svg:g>`,
})
export class PhArrowLineUpLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
