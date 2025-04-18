import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwMehOIcon],svg[uiw-meh-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0m0 1.395a8.605 8.605 0 1 0 0 17.21a8.605 8.605 0 0 0 0-17.21m2.529 12.28a.698.698 0 1 1 0 1.395H6.947a.698.698 0 0 1 0-1.396zM5.814 6.278a1.395 1.395 0 1 1 0 2.79a1.395 1.395 0 0 1 0-2.79m8.372 0a1.395 1.395 0 1 1 0 2.79a1.395 1.395 0 0 1 0-2.79"></svg:path>`,
})
export class UiwMehOIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
