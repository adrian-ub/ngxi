import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNintendoSwitchOnlineIcon],svg[arcticons-nintendo-switch-online-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="13.5" cy="16.2" r="3.4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.5" cy="26.2" r="3.4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 5.5h-7.3c-4.8 0-8.7 3.9-8.7 8.6V34c0 4.7 3.9 8.6 8.7 8.6h7.3zm12.3 0h-7.3v37.1h7.3c4.8 0 8.7-3.9 8.7-8.6V14.1c0-4.7-3.9-8.6-8.7-8.6"></svg:path>`,
})
export class ArcticonsNintendoSwitchOnlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
