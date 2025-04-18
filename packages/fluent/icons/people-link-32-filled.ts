import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeopleLink32FilledIcon],svg[fluent-people-link-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 16a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M23 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8M5 18a3 3 0 0 0-3 3v.15S2 27 10.5 27c2.027 0 3.57-.333 4.746-.84A5.97 5.97 0 0 1 14 22.5c0-1.792.786-3.4 2.031-4.5zm16.5 1a1 1 0 0 0-1-1H20a4.5 4.5 0 1 0 0 9h.5a1 1 0 1 0 0-2H20a2.5 2.5 0 0 1 0-5h.5a1 1 0 0 0 1-1m4-1a1 1 0 1 0 0 2h.5a2.5 2.5 0 0 1 0 5h-.5a1 1 0 1 0 0 2h.5a4.5 4.5 0 1 0 0-9zm-5 3.5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentPeopleLink32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
