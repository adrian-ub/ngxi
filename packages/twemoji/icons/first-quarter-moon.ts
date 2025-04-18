import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFirstQuarterMoonIcon],svg[twemoji-first-quarter-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFD983" d="M18 0v36c9.941 0 18-8.059 18-18S27.941 0 18 0"></svg:path><svg:path fill="#66757F" d="M0 18c0 9.941 8.059 18 18 18V0C8.059 0 0 8.059 0 18"></svg:path><svg:circle cx="25.5" cy="8.5" r="3.5" fill="#FFCC4D"></svg:circle><svg:circle cx="12" cy="16" r="3" fill="#5B6876"></svg:circle><svg:circle cx="13.5" cy="27.5" r="3.5" fill="#5B6876"></svg:circle><svg:circle cx="15" cy="6" r="2" fill="#5B6876"></svg:circle><svg:circle cx="33" cy="18" r="1" fill="#FFCC4D"></svg:circle><svg:circle cx="6" cy="9" r="1" fill="#5B6876"></svg:circle><svg:circle cx="21" cy="31" r="1" fill="#FFCC4D"></svg:circle><svg:circle cx="4" cy="19" r="2" fill="#5B6876"></svg:circle><svg:circle cx="26" cy="23" r="2" fill="#FFCC4D"></svg:circle>`,
})
export class TwemojiFirstQuarterMoonIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
