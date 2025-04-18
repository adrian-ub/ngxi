import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionSharpTurnIcon],svg[carbon-direction-sharp-turn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 18v6.586L7.707 6.293A1 1 0 0 0 6 7v21h2V9.414L24.586 26H18v2h10V18Z"></svg:path>`,
})
export class CarbonDirectionSharpTurnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
