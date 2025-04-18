import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFieldHockeyIcon],svg[twemoji-field-hockey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#C1694F" d="M4 21c2.409 0 2 2 2 3s0 3 2 3s3.464-2.465 7-6L36 0v7S22.5 21.5 18 26s-7 7-10 7c-3.513 0-7-2.605-7-7c0-4 2-5 3-5"></svg:path><svg:circle cx="26.5" cy="29.5" r="6.5" fill="#DD2E44"></svg:circle><svg:path fill="#FFAC33" d="M25.01 18.712C30.254 13.171 36 7 36 7V0L25.01 10.99zM22 21.878l1-1.049V13l-1 1z"></svg:path>`,
})
export class TwemojiFieldHockeyIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
