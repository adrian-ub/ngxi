import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCalendarEnvelopeIcon],svg[vaadin-calendar-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h1v2H3zm6 0h1v2H9z"></svg:path><svg:path fill="currentColor" d="M13 7V1h-2v2H8V1H5v2H2V1H0v12h4v3h12V7zm-9 5H1V5h11v2H4zm1-1.8l2.6 1.5L5 14.3zm.7 4.8l2.8-2.8l1.5.9l1.5-.8l2.8 2.8H5.7zm9.3-.7l-2.6-2.6l2.6-1.4zm0-5.1l-5 2.7L5 9V8h10zm.4.4"></svg:path>`,
})
export class VaadinCalendarEnvelopeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
