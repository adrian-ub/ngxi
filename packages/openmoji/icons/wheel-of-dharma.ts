import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWheelOfDharmaIcon],svg[openmoji-wheel-of-dharma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b399c8" d="M12 12h48v47.83H12z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="3" d="M51.01 35.99a15 15 0 1 1-15-15a15 15 0 0 1 15 15"></svg:path><svg:path stroke-width="3" d="M41 36a5 5 0 1 1-5-5.001A5 5 0 0 1 41 36m-5-5V19m0 34V41"></svg:path><svg:path stroke-width="2" d="M12 12h48v48H12z"></svg:path><svg:path stroke-width="3" d="M41 36h12m-34 0h12m8.54-3.54l8.48-8.48M23.98 48.02l8.48-8.48m0-7.08l-8.48-8.48m24.04 24.04l-8.48-8.48"></svg:path></svg:g>`,
})
export class OpenmojiWheelOfDharmaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
