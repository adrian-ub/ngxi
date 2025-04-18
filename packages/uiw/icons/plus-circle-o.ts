import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwPlusCircleOIcon],svg[uiw-plus-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0m0 1.395a8.605 8.605 0 1 0 0 17.21a8.605 8.605 0 0 0 0-17.21m0 4.08c.377 0 .682.305.682.681L10.68 9.28h3.124a.682.682 0 1 1 0 1.364H10.68v3.123a.682.682 0 1 1-1.363 0v-3.123H6.195a.682.682 0 1 1 0-1.363l3.123-.001V6.156c0-.376.305-.681.682-.681"></svg:path>`,
})
export class UiwPlusCircleOIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
