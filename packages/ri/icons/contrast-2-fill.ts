import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riContrast2FillIcon],svg[ri-contrast-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.997c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m-6.671-5.575A8 8 0 1 0 16.425 5.325a9 9 0 0 1-2.304 8.793a9 9 0 0 1-8.792 2.304"></svg:path>`,
})
export class RiContrast2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
