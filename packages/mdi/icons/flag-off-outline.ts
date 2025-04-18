import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFlagOffOutlineIcon],svg[mdi-flag-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3L5 6.89V21h2v-7h5.11l.61.61L13 16h1.11l6.73 6.73zM7 12V8.89L10.11 12zm2.2-6l-2-2H14l.4 2H20v10h-.8l-2-2h.8V8h-5.24l-.4-2z"></svg:path>`,
})
export class MdiFlagOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
