import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilArrowCircleRightIcon],svg[cil-arrow-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256.25 16.042c-132.548 0-240 107.451-240 240s107.452 240 240 240s240-107.452 240-240s-107.45-240-240-240M403.328 403.12A207.253 207.253 0 1 1 447.917 337a207.4 207.4 0 0 1-44.589 66.12"></svg:path><svg:path fill="currentColor" d="m239.637 164.987l75.053 75.054H128.137v32H314.69l-75.053 75.054l22.627 22.627l113.681-113.681L262.264 142.36z"></svg:path>`,
})
export class CilArrowCircleRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
