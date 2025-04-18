import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiArticulatedLorryIcon],svg[twemoji-articulated-lorry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#99AAB5" d="M31 25H11v-1a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-2z"></svg:path><svg:path fill="#FFCC4D" d="M10 12H7.146C4 12 3 14 3 14l-3 5.959V25h13V15a3 3 0 0 0-3-3"></svg:path><svg:path fill="#55ACEE" d="M9 20H2l2-4s1-2 3-2h2z"></svg:path><svg:circle cx="6" cy="31" r="4" fill="#292F33"></svg:circle><svg:circle cx="6" cy="31" r="2" fill="#CCD6DD"></svg:circle><svg:circle cx="30" cy="31" r="4" fill="#292F33"></svg:circle><svg:circle cx="30" cy="31" r="2" fill="#CCD6DD"></svg:circle><svg:circle cx="20" cy="31" r="4" fill="#292F33"></svg:circle><svg:circle cx="20" cy="31" r="2" fill="#CCD6DD"></svg:circle><svg:path fill="#77B255" d="M32 8H19a4 4 0 0 0-4 4v13h21V12a4 4 0 0 0-4-4"></svg:path>`,
})
export class TwemojiArticulatedLorryIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
