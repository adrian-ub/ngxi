import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundAddLocationIcon],svg[ic-round-add-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7c0-.55-.44-1-1-1c-.55 0-1 .44-1 1v2H9c-.55 0-1 .44-1 1c0 .55.44 1 1 1h2v2c0 .55.44 1 1 1c.55 0 1-.44 1-1v-2h2c.55 0 1-.44 1-1c0-.55-.44-1-1-1h-2zm-1-5c4.2 0 8 3.22 8 8.2c0 3.18-2.45 6.92-7.34 11.23c-.38.33-.95.33-1.33 0C6.45 17.12 4 13.38 4 10.2C4 5.22 7.8 2 12 2"></svg:path>`,
})
export class IcRoundAddLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
