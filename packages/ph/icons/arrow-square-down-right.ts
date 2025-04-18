import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareDownRightIcon],svg[ph-arrow-square-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160ZM90.34 101.66a8 8 0 0 1 11.32-11.32L152 140.69V112a8 8 0 0 1 16 0v48a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h28.69Z"></svg:path>`,
})
export class PhArrowSquareDownRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
