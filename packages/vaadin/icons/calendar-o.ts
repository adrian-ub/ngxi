import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCalendarOIcon],svg[vaadin-calendar-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 1v3h-3V1H5v3H2V1H0v15h16V1zm1 14H1V6h14z"></svg:path><svg:path fill="currentColor" d="M3 0h1v3H3zm9 0h1v3h-1z"></svg:path>`,
})
export class VaadinCalendarOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
