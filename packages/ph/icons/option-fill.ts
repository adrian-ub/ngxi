import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phOptionFillIcon],svg[ph-option-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-16 136h-47.06a15.92 15.92 0 0 1-14.31-8.84L103.06 96H56a8 8 0 0 1 0-16h47.06a15.92 15.92 0 0 1 14.31 8.84L152.94 160H200a8 8 0 0 1 0 16m0-80h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhOptionFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
