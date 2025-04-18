import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilLocationPinAltIcon],svg[uil-location-pin-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10.8a2 2 0 1 0-2-2a2 2 0 0 0 2 2m-.71 6.91a1 1 0 0 0 1.42 0l4.09-4.1a6.79 6.79 0 1 0-9.6 0ZM7.23 8.34a4.81 4.81 0 0 1 2.13-3.55a4.81 4.81 0 0 1 5.28 0a4.82 4.82 0 0 1 .75 7.41L12 15.59L8.61 12.2a4.77 4.77 0 0 1-1.38-3.86M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilLocationPinAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
