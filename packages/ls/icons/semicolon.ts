import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsSemicolonIcon],svg[ls-semicolon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M67 145h77v77H67zm17 393l70 33l-93 196l-61-29z"></svg:path>`,
})
export class LsSemicolonIcon {
  readonly viewBox = input("0 0 154 767")
  readonly width = input("0.21em")
  readonly height = input("1em")
}
