import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChromeRemoteDesktopIcon],svg[arcticons-chrome-remote-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.9 41.5c-.3-1.1-.5-2.2-.5-3.4c0-6.6 5.3-11.9 11.9-11.9s11.9 5.3 11.9 11.9c0 1.2-.2 2.3-.5 3.4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.5 41.5c-1-.8-1.6-2.1-1.6-3.4c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 1.4-.6 2.6-1.6 3.4m-3-7.9h11m-14.8 6.7L11 30.7m25.9 2h5.5c.9 0 1.7-.8 1.7-1.7V8.2c0-.9-.8-1.7-1.7-1.7H12.9c-.9 0-1.7.8-1.7 1.7v7"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.8 17v22.8c0 .9.8 1.7 1.7 1.7h29.6c.9 0 1.7-.8 1.7-1.7V17c0-.9-.8-1.7-1.7-1.7H5.5c-.9 0-1.7.8-1.7 1.7"></svg:path>`,
})
export class ArcticonsChromeRemoteDesktopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
