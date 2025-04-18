import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiLoopSquareIcon],svg[oi-loop-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0v2h1V1h4v2H5l1.5 2.5L8 3H7V0zm.5 2.5L0 5h1v3h6V6H6v1H2V5h1z"></svg:path>`,
})
export class OiLoopSquareIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
