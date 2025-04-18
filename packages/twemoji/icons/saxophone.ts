import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiSaxophoneIcon],svg[twemoji-saxophone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FCAB40" fill-rule="evenodd" d="M14 16L9 26s-1 2 1 2c1 0 2-2 2-2L26 7s2-4 8-1v2c-3-1-4 1-4 1L15 33s-2 3-7 3c-6 0-7-5-7-8c0-2 1-4 2-6s-2-6-2-6z" clip-rule="evenodd"></svg:path><svg:path fill="#FDCB58" d="M7.5 20C4.04 20 0 18.952 0 16s4.04-4 7.5-4s7.5 1.047 7.5 4c0 2.952-4.04 4-7.5 4"></svg:path><svg:circle cx="19" cy="17" r="2" fill="#CCD6DD"></svg:circle><svg:circle cx="22" cy="13" r="2" fill="#CCD6DD"></svg:circle><svg:circle cx="25" cy="9" r="2" fill="#CCD6DD"></svg:circle><svg:path fill="#9AAAB4" d="M33.998 10c-.3 0-.605-.068-.893-.211l-2-1a2 2 0 0 1 1.789-3.579l2 1a2 2 0 0 1-.896 3.79"></svg:path><svg:path fill="#FCAB40" fill-rule="evenodd" d="m8.806 21.703l1.267-1.547l6.19 5.069l-1.267 1.547z" clip-rule="evenodd"></svg:path>`,
})
export class TwemojiSaxophoneIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
