import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenTrbIcon],svg[token-trb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.978 7.732c.61 2.422-11.4 8.407-16.845 9.83c-5.444 1.422 10.528-5.592 9.904-8.013c-.623-2.423-13.353-.437-7.91-1.86c5.445-1.422 14.24-2.38 14.85.043"></svg:path>`,
})
export class TokenTrbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
