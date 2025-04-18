import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFramedPictureIcon],svg[emojione-framed-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#333" d="M2 4v56l30-28z"></svg:path><svg:path fill="#697277" d="M62 4H2l30 28z"></svg:path><svg:path fill="#333" d="M2 60h60L32 32z"></svg:path><svg:path fill="#697277" d="m32 32l30 28V4z"></svg:path><svg:path fill="#52595e" d="M5 7h54v50H5z"></svg:path><svg:path fill="#697277" d="M9 11v42l23-21z"></svg:path><svg:path fill="#333" d="M55 11H9l23 21z"></svg:path><svg:path fill="#697277" d="M9 53h46L32 32z"></svg:path><svg:path fill="#333" d="m32 32l23 21V11z"></svg:path><svg:path fill="#42ade2" d="M16 18h32v18H16z"></svg:path><svg:path fill="#fed0ac" d="M16 34.7h32V46H16z"></svg:path><svg:circle cx="40.5" cy="24.5" r="3.8" fill="#ffce31"></svg:circle><svg:path fill="#89664c" d="M21.3 37.9L32 41V28.4z"></svg:path><svg:path fill="#d3976e" d="M42.7 37.9L32 41V28.4z"></svg:path><svg:path fill="#fff" d="M11 13v38h42V13zm36 32H17V19h30z"></svg:path><svg:path fill="#bfb3a4" d="M12 14v36h40V14zm36.2 32.2H15.8V17.8h32.3v28.4z"></svg:path>`,
})
export class EmojioneFramedPictureIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
