import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSquareHalfDuotoneIcon],svg[ph-square-half-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 56v144a8 8 0 0 1-8 8h-72V48h72a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M56 56h64v144H56Zm144 144h-64V56h64z"></svg:path></svg:g>`,
})
export class PhSquareHalfDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
