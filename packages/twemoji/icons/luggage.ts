import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiLuggageIcon],svg[twemoji-luggage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#292F33" d="M22 2h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path><svg:path fill="#292F33" d="M13 1h2v2h-2zm8 0h2v2h-2z"></svg:path><svg:path fill="#CCD6DD" d="M13 3h2v6h-2zm8 0h2v6h-2z"></svg:path><svg:path fill="#292F33" d="M7 25c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1m3 9.2H9c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1m17 0h-1c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1"></svg:path><svg:path fill="#4289C1" d="M27 33H9c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2v21c0 1.1-.9 2-2 2"></svg:path><svg:path fill="#5DADEC" d="M26 18H10c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1m0 13H10c-.55 0-1-.45-1-1V20c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1"></svg:path><svg:circle cx="9" cy="35" r="1" fill="#292F33"></svg:circle><svg:circle cx="27" cy="35" r="1" fill="#292F33"></svg:circle><svg:path fill="#2A6797" d="M25.5 12h-15c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h15c.275 0 .5.225.5.5s-.225.5-.5.5m0 9h-15c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h15c.275 0 .5.225.5.5s-.225.5-.5.5"></svg:path><svg:path fill="#F5F8FA" d="M11.5 12h-1c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h1c.275 0 .5.225.5.5s-.225.5-.5.5m0 9h-1c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h1c.275 0 .5.225.5.5s-.225.5-.5.5"></svg:path>`,
})
export class TwemojiLuggageIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
