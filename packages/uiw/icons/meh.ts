import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwMehIcon],svg[uiw-meh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0m2.529 13.674H6.947a.698.698 0 0 0 0 1.396h5.582a.698.698 0 1 0 0-1.396M5.814 6.28a1.395 1.395 0 1 0 0 2.79a1.395 1.395 0 0 0 0-2.79m8.372 0a1.395 1.395 0 1 0 0 2.79a1.395 1.395 0 0 0 0-2.79"></svg:path>`,
})
export class UiwMehIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
