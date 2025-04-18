import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riContactsBook3LineIcon],svg[ri-contacts-book-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a1 1 0 0 0-1 1v2h2V4h14v16H5v-1H3v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm5 14a3 3 0 1 1 6 0zm3-4a2 2 0 1 1 0-4a2 2 0 0 1 0 4M6 9V7H2v2zm0 2v2H2v-2zm0 6v-2H2v2z"></svg:path>`,
})
export class RiContactsBook3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
