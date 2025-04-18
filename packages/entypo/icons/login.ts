import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoLoginIcon],svg[entypo-login-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10L8 5v3H1v4h7v3zm3 7H9v2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9v2h8z"></svg:path>`,
})
export class EntypoLoginIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
