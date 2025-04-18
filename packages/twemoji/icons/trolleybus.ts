import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiTrolleybusIcon],svg[twemoji-trolleybus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#77B255" d="M0 22v6a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-6z"></svg:path><svg:path fill="#6D6E71" d="M15 12a1 1 0 0 1-.768-1.64c5.186-6.224 12.325-7.307 12.626-7.35A1 1 0 0 1 27 3h3a1 1 0 1 1 0 2h-2.919c-.69.119-6.878 1.319-11.312 6.641A1 1 0 0 1 15 12"></svg:path><svg:path fill="#A7A9AC" d="M11 9h14v4H11z"></svg:path><svg:path fill="#E6E7E8" d="M36 22v-8a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v8z"></svg:path><svg:path fill="#5C913B" d="M0 22h36v2H0zm7 3a6 6 0 0 0-5.95 5.263A2.98 2.98 0 0 0 3 31h10a6 6 0 0 0-6-6m27.95 5.263A5.998 5.998 0 0 0 23 31h10c.749 0 1.425-.284 1.95-.737"></svg:path><svg:circle cx="7" cy="31" r="4"></svg:circle><svg:circle cx="7" cy="31" r="2" fill="#99AAB5"></svg:circle><svg:circle cx="29" cy="31" r="4"></svg:circle><svg:circle cx="29" cy="31" r="2" fill="#99AAB5"></svg:circle><svg:path fill="#55ACEE" d="M27 19a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1zm7 0a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1zm-21 0a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1zm7 0a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1zM5 15H0v7h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1"></svg:path><svg:path fill="#FFE8B6" d="M0 25h1v2H0z"></svg:path><svg:path fill="#EA596E" d="M35 25h1v2h-1z"></svg:path><svg:path fill="#F4ABBA" d="M35 22h1v2h-1z"></svg:path>`,
})
export class TwemojiTrolleybusIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
