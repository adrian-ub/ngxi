import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenLandIcon],svg[token-land-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.163 8.717v6.664L12 18.776V21l-7.784-4.62V7.622z"></svg:path><svg:path fill="currentColor" d="M8.108 9.812v4.377L12 16.378V12z"></svg:path><svg:path fill="currentColor" d="M8.108 5.325L12.048 3l7.735 4.622L11.999 12L8.11 9.81zM6.163 6.473L4.216 7.62l1.947 1.095zm5.841 12.302V21l7.78-4.621V7.622L12 12l.002 4.377l5.836-3.404v2.432z"></svg:path>`,
})
export class TokenLandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
