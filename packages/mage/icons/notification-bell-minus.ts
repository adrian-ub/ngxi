import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellMinusIcon],svg[mage-notification-bell-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M11.962 17.986h6.81a1.555 1.555 0 0 0 1.512-2.175c-.36-1.088-1.795-2.393-1.795-3.677c0-2.85 0-3.6-1.403-5.276a5 5 0 0 0-1.654-1.283l-.783-.38a1.1 1.1 0 0 1-.511-.73a2.023 2.023 0 0 0-2.176-1.707a2.024 2.024 0 0 0-2.12 1.707a1.09 1.09 0 0 1-.566.73l-.784.38A5 5 0 0 0 6.84 6.858c-1.403 1.676-1.403 2.426-1.403 5.276c0 1.284-1.37 2.458-1.73 3.611c-.217.697-.337 2.241 1.48 2.241z"></svg:path><svg:path stroke-linejoin="round" d="M15.226 17.986a3.196 3.196 0 0 1-3.264 3.263A3.195 3.195 0 0 1 8.7 17.986"></svg:path><svg:path stroke-miterlimit="10" d="M9.5 11.496h5"></svg:path></svg:g>`,
})
export class MageNotificationBellMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
