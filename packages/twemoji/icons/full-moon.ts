import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFullMoonIcon],svg[twemoji-full-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="18" r="18" fill="#FFD983"></svg:circle><svg:g fill="#FFCC4D"><svg:circle cx="10.5" cy="8.5" r="3.5"></svg:circle><svg:circle cx="20" cy="17" r="3"></svg:circle><svg:circle cx="24.5" cy="28.5" r="3.5"></svg:circle><svg:circle cx="22" cy="5" r="2"></svg:circle><svg:circle cx="3" cy="18" r="1"></svg:circle><svg:circle cx="30" cy="9" r="1"></svg:circle><svg:circle cx="15" cy="31" r="1"></svg:circle><svg:circle cx="32" cy="19" r="2"></svg:circle><svg:circle cx="10" cy="23" r="2"></svg:circle></svg:g>`,
})
export class TwemojiFullMoonIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
