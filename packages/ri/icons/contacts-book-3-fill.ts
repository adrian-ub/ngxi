import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riContactsBook3FillIcon],svg[ri-contacts-book-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a1 1 0 0 0-1 1v2h2v2H2v2h3v2H2v2h3v2H2v2h3v2H3v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm5 14a3 3 0 1 1 6 0zm3-4a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiContactsBook3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
