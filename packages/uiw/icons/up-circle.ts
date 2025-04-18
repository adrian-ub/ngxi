import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwUpCircleIcon],svg[uiw-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0m-.48 7.636l-3.896 3.87a.682.682 0 0 0 .962.968l3.419-3.398l3.49 3.402a.682.682 0 0 0 .952-.976l-3.971-3.87a.68.68 0 0 0-.957.004"></svg:path>`,
})
export class UiwUpCircleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
