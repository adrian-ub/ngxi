import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwLeftCircleIcon],svg[uiw-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0m.788 5.646l-3.87 3.971a.68.68 0 0 0 .005.957l3.87 3.895a.682.682 0 1 0 .967-.961l-3.397-3.42l3.402-3.49a.682.682 0 1 0-.977-.952"></svg:path>`,
})
export class UiwLeftCircleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
