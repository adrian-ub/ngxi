import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siSunSetLineIcon],svg[si-sun-set-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.57 17.93A5.98 5.98 0 0 1 6 13c0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.05-1.03 3.86-2.6 4.94M12 4V2M3 13H1m22 0h-2m-1.222-7.778l-1.414 1.414m-12.728 0L4.222 5.222M4 18h16M8 21h8"></svg:path>`,
})
export class SiSunSetLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
