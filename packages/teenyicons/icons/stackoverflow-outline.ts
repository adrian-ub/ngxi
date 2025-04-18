import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsStackoverflowOutlineIcon],svg[teenyicons-stackoverflow-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 9v5.5h10V9M4 12.5h7M4 10l7 .7M4.3 7.5L11 9M5.3 4.5l6.1 3.1M7 2l5 4.5M9.5.5l3.5 5"></svg:path>`,
})
export class TeenyiconsStackoverflowOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
