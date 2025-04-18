import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwLeftCircleOIcon],svg[uiw-left-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0m0 1.395a8.605 8.605 0 1 0 0 17.21a8.605 8.605 0 0 0 0-17.21m.788 4.25a.682.682 0 0 1 .977.952l-3.402 3.491l3.397 3.42a.682.682 0 0 1-.967.96l-3.87-3.894a.68.68 0 0 1-.005-.957Z"></svg:path>`,
})
export class UiwLeftCircleOIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
