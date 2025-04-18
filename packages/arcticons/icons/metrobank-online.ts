import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetrobankOnlineIcon],svg[arcticons-metrobank-online-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 22.905L25.97 34.753c-1.05.606-2.998.596-3.99 0L5.5 22.907V42.54h37z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.308 17.417L22.285 5.97c.95-.68 2.48-.68 3.43 0l15.977 11.447c.95.681.95 1.777 0 2.458L25.715 31.322c-.95.681-2.48.681-3.43 0L6.308 19.875c-.95-.68-.95-1.777 0-2.458M5.6 18.646h36.8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 31.74V5.54l-9.312 13.106zl9.311-13.094L24 5.54"></svg:path>`,
})
export class ArcticonsMetrobankOnlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
