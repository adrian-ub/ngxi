import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCalendarUserIcon],svg[vaadin-calendar-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h1v3H3zm8 0h1v3h-1z"></svg:path><svg:path fill="currentColor" d="M9 14.1q0-.15 0 0L1 14V6h13v1.2c.4.1.7.3 1 .6V1h-2v3h-3V1H5v3H2V1H0v14h9z"></svg:path><svg:path fill="currentColor" d="M15 10a2 2 0 1 1-3.999.001A2 2 0 0 1 15 10"></svg:path><svg:path fill="currentColor" d="M13.9 12h-1.8c-1.1 0-2.1.9-2.1 2.1V16h6v-1.9c0-1.2-.9-2.1-2.1-2.1"></svg:path>`,
})
export class VaadinCalendarUserIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
