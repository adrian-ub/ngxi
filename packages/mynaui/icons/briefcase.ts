import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBriefcaseIcon],svg[mynaui-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.308 21h7.384c3.71 0 4.375-1.45 4.569-3.213l.692-7.2c.25-2.196-.397-3.987-4.338-3.987h-9.23c-3.941 0-4.587 1.791-4.338 3.987l.692 7.2C3.933 19.55 4.598 21 8.308 21m0-14.4v-.72c0-1.593 0-2.88 2.954-2.88h1.476c2.954 0 2.954 1.287 2.954 2.88v.72"></svg:path><svg:path d="M9.812 13.331A15.26 15.26 0 0 1 3.234 11m11 2.331A15.26 15.26 0 0 0 20.812 11M14 13.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class MynauiBriefcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
