import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagDenmarkIcon],svg[twemoji-flag-denmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#C60C30" d="M32 5H15v11h21V9a4 4 0 0 0-4-4M15 31h17c2.209 0 4-1.791 4-4.5V20H15zM0 20v6.5C0 29.209 1.791 31 4 31h7V20zM11 5H4a4 4 0 0 0-4 4v7h11z"></svg:path><svg:path fill="#EEE" d="M15 5h-4v11H0v4h11v11h4V20h21v-4H15z"></svg:path>`,
})
export class TwemojiFlagDenmarkIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
