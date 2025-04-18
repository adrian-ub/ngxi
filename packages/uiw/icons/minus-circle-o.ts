import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwMinusCircleOIcon],svg[uiw-minus-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0m0 1.395a8.605 8.605 0 1 0 0 17.21a8.605 8.605 0 0 0 0-17.21m4.588 7.923a.682.682 0 1 1 0 1.364H6.143a.682.682 0 0 1 0-1.364z"></svg:path>`,
})
export class UiwMinusCircleOIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
