import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiToiletIcon],svg[twemoji-toilet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#AAB8C2" d="M26 18v2H13.293c-.867 0-1.835.896-2.161 2L7.59 34c-.326 1.104.306 2 1.41 2h18a2 2 0 0 0 2-2V24a3.99 3.99 0 0 1 3-3.858V18z"></svg:path><svg:path fill="#E1E8ED" d="M22 21.875C22 25.396 17.522 29 12 29S2 25.396 2 21.875C2 20 2.833 20 12 20s10 0 10 1.875M25 19c0 .553-.514 1-1.15 1H3.15C2.515 20 2 19.553 2 19s.515-1 1.15-1h20.7c.636 0 1.15.447 1.15 1"></svg:path><svg:path fill="#99AAB5" d="M18 16H6a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2m2-16v18c1.104 0 2-1.007 2-2.25V2.25C22 1.007 21.104 0 20 0"></svg:path><svg:path fill="#E1E8ED" d="M34 4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z"></svg:path><svg:circle cx="20" cy="16" r="2" fill="#CCD6DD"></svg:circle><svg:path fill="#CCD6DD" d="M22 4h12v2H22z"></svg:path><svg:path fill="#AAB8C2" d="M25 21a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h21a1 1 0 0 1 1 1"></svg:path>`,
})
export class TwemojiToiletIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
