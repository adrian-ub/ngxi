import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiWaxingCrescentMoonIcon],svg[twemoji-waxing-crescent-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="18" r="18" fill="#FFD983"></svg:circle><svg:path fill="#66757F" d="M0 18c0 9.941 8.059 18 18 18c.295 0 .58-.029.87-.043C24.761 33.393 29 26.332 29 18C29 9.669 24.761 2.607 18.87.044C18.58.03 18.295 0 18 0C8.059 0 0 8.059 0 18"></svg:path><svg:circle cx="10.5" cy="8.5" r="3.5" fill="#5B6876"></svg:circle><svg:circle cx="20" cy="16" r="3" fill="#5B6876"></svg:circle><svg:circle cx="21.5" cy="27.5" r="3.5" fill="#5B6876"></svg:circle><svg:circle cx="21" cy="6" r="2" fill="#5B6876"></svg:circle><svg:circle cx="3" cy="18" r="1" fill="#5B6876"></svg:circle><svg:circle cx="30" cy="9" r="1" fill="#FFCC4D"></svg:circle><svg:circle cx="15" cy="31" r="1" fill="#5B6876"></svg:circle><svg:circle cx="32" cy="19" r="2" fill="#FFCC4D"></svg:circle><svg:circle cx="10" cy="23" r="2" fill="#5B6876"></svg:circle>`,
})
export class TwemojiWaxingCrescentMoonIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
