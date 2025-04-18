import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarStartIcon],svg[mdi-calendar-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 14h2v3h5v-3l4 4l-4 4v-3H4v3H2zm17 5V8H5v4H3V5c0-1.11.89-2 2-2h1V.998h2V3h8V.998h2V3h1a2 2 0 0 1 2 2v14c0 1.1-.9 2-2 2h-6.17l2-2z"></svg:path>`,
})
export class MdiCalendarStartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
