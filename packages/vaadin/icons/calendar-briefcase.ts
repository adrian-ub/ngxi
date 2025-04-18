import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCalendarBriefcaseIcon],svg[vaadin-calendar-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h1v3H3zm8 0h1v3h-1z"></svg:path><svg:path fill="currentColor" d="M13 1v3h-3V1H5v3H2V1H0v14h5v-1H1V6h13v3h1V1z"></svg:path><svg:path fill="currentColor" d="M13 10V8H9v2H6v6h10v-6zm-3-1h2v1h-2z"></svg:path>`,
})
export class VaadinCalendarBriefcaseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
