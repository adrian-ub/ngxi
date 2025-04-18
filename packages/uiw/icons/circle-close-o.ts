import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwCircleCloseOIcon],svg[uiw-circle-close-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0m0 1.395a8.605 8.605 0 1 0 0 17.21a8.605 8.605 0 0 0 0-17.21m2.207 5.442a.682.682 0 0 1 .963.964l-2.195 2.193l2.195 2.193a.682.682 0 0 1-.963.965l-2.197-2.195l-2.195 2.195a.68.68 0 0 1-.88.071l-.084-.072a.68.68 0 0 1 0-.964l2.195-2.193l-2.195-2.193a.682.682 0 1 1 .964-.964L10.01 9.03Z"></svg:path>`,
})
export class UiwCircleCloseOIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
