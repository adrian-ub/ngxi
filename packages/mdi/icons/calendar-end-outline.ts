import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarEndOutlineIcon],svg[mdi-calendar-end-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 9h14v3h2V5c0-1.1-.9-2-2-2h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4v-2H5zm14-4v2H5V5zm-3 12h-5v2h5v3l4-4l-4-4zm4-3v8h2v-8z"></svg:path>`,
})
export class MdiCalendarEndOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
