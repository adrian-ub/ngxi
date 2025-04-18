import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenNalsIcon],svg[token-nals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.075 5H9.5v2h-3v4.58l-.5.35v.55l.5.325V17h3v2H6.075L4.5 17v-4H3v-2h1.5V7zm11.85 0H14.5v2h3v4.58l.5.35v.55l-.5.325V17h-3v2h3.425l1.575-2v-4H21v-2h-1.5V7zM11.5 9.97c.24-.225.55-.47 1.16-.47c1.065 0 1.84.985 1.84 2.01v2.99H13v-3.105c-.04-.29-.175-.895-.67-.895c-.355 0-.83.5-.83.79v3.21H10v-5h1.5z"></svg:path>`,
})
export class TokenNalsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
