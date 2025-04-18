import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapHospitalIcon],svg[map-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M37 1c-.55 0-1 .45-1 1v14c0 .55-.45 1-1 1H15c-.55 0-1-.45-1-1V2c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v46c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V32c0-.55.45-1 1-1h20c.55 0 1 .45 1 1v16c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1z"></svg:path>`,
})
export class MapHospitalIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
