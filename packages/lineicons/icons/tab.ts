import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsTabIcon],svg[lineicons-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.995 17.25a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.75 2A2.25 2.25 0 0 0 4.5 4.25v15.5A2.25 2.25 0 0 0 6.75 22h10.5a2.25 2.25 0 0 0 2.25-2.25V4.25A2.25 2.25 0 0 0 17.25 2zM6 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsTabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
