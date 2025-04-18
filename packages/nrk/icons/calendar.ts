import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkCalendarIcon],svg[nrk-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 1h2v2h8V1h2v2h4v19H2V3h4zM4 20V7h16v13zM8 9H6v2h2zm2 0h2v2h-2zm-2 4H6v2h2z" clip-rule="evenodd"></svg:path>`,
})
export class NrkCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
