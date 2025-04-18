import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwUpCircleOIcon],svg[uiw-up-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0m0 1.395a8.605 8.605 0 1 0 0 17.21a8.605 8.605 0 0 0 0-17.21m-.48 6.241a.68.68 0 0 1 .956-.005l3.971 3.87a.682.682 0 1 1-.951.977l-3.491-3.402l-3.42 3.398a.682.682 0 1 1-.96-.968Z"></svg:path>`,
})
export class UiwUpCircleOIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
