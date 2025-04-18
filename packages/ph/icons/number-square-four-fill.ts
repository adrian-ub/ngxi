import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareFourFillIcon],svg[ph-number-square-four-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-48 128h-8v16a8 8 0 0 1-16 0v-16H88a8 8 0 0 1-6.31-12.91l56-72A8 8 0 0 1 152 80v64h8a8 8 0 0 1 0 16m-55.64-16L136 103.32V144Z"></svg:path>`,
})
export class PhNumberSquareFourFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
