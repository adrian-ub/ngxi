import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwMinusCircleIcon],svg[uiw-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0m4.455 9.09H6.273a.818.818 0 0 0 0 1.637h8.182a.818.818 0 0 0 0-1.636"></svg:path>`,
})
export class UiwMinusCircleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
