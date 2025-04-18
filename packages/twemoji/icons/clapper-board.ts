import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiClapperBoardIcon],svg[twemoji-clapper-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F7123" d="M35.845 32c0 2.2-1.8 4-4 4h-26c-2.2 0-4-1.8-4-4V19c0-2.2 1.8-4 4-4h26c2.2 0 4 1.8 4 4z"></svg:path><svg:path fill="#3F7123" d="M1.845 15h34v6h-34z"></svg:path><svg:path fill="#CCD6DD" d="M1.845 15h34v7h-34z"></svg:path><svg:path fill="#292F33" d="M1.845 15h4l-4 7zm11 0l-4 7h7l4-7zm14 0l-4 7h7l4-7z"></svg:path><svg:path fill="#CCD6DD" d="M.155 8.207L33.148 0l1.69 6.792L1.845 15z"></svg:path><svg:path fill="#292F33" d="m.155 8.207l5.572 5.827L1.845 15zm19.158 2.448l-5.572-5.828l-6.793 1.69l5.572 5.828zm13.586-3.38l-5.572-5.828l-6.793 1.69l5.572 5.827z"></svg:path>`,
})
export class TwemojiClapperBoardIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
