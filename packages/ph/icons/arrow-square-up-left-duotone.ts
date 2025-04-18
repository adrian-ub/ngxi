import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareUpLeftDuotoneIcon],svg[ph-arrow-square-up-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160ZM88 144V96a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-28.69l50.35 50.34a8 8 0 0 1-11.32 11.32L104 115.31V144a8 8 0 0 1-16 0"></svg:path></svg:g>`,
})
export class PhArrowSquareUpLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
