import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarHeartOutlineIcon],svg[mdi-calendar-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12.2c0 1.51-1.36 2.74-3.42 4.61l-.58.53l-.58-.53C9.36 14.94 8 13.71 8 12.2c0-1.23.97-2.2 2.2-2.2c.7 0 1.36.32 1.8.83c.44-.51 1.1-.83 1.8-.83c1.23 0 2.2.97 2.2 2.2M21 5v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1V1h2v2h8V1h2v2h1a2 2 0 0 1 2 2M5 5v2h14V5zm14 14V9H5v10z"></svg:path>`,
})
export class MdiCalendarHeartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
