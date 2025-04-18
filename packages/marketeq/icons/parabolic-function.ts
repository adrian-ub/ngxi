import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqParabolicFunctionIcon],svg[marketeq-parabolic-function-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M22.917 6.25c.458 14.27 2.541 25 6.25 25s5.791-10.73 6.25-25"></svg:path><svg:path stroke="#306CFE" d="M43.75 39.583H6.25M10.417 6.25v37.5z"></svg:path></svg:g>`,
})
export class MarketeqParabolicFunctionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
