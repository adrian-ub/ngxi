import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsPowerSwitchIcon],svg[lineicons-power-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 37.9c1.2 0 2.3-1 2.3-2.3V5c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v30.7c.1 1.2 1.1 2.2 2.3 2.2"></svg:path><svg:path fill="currentColor" d="M43.1 9.7c-1.1-.5-2.5 0-3 1.1s0 2.5 1.1 3c8 3.6 13.2 11.7 13.2 20.5c0 12.4-10.1 22.5-22.5 22.5S9.5 46.7 9.5 34.3c0-8.8 5.2-16.8 13.2-20.5c1.1-.5 1.6-1.8 1.1-3c-.5-1.1-1.8-1.6-3-1.1C11.3 14.1 5 23.7 5 34.3c0 14.9 12.1 27 27 27s27-12.1 27-27c0-10.6-6.3-20.2-15.9-24.6"></svg:path>`,
})
export class LineiconsPowerSwitchIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
