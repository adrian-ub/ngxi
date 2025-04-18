import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCheckerboardFillIcon],svg[ph-checkerboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176h-80v-80H48V48h80v80h80z"></svg:path>`,
})
export class PhCheckerboardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
