import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riContrastFillIcon],svg[ri-contrast-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.997c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2v-16a8 8 0 0 0 0 16"></svg:path>`,
})
export class RiContrastFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
