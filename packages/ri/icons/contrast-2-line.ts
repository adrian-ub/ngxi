import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riContrast2LineIcon],svg[ri-contrast-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.997c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-5-4.681a8.97 8.97 0 0 0 5.707-2.612a8.97 8.97 0 0 0 2.612-5.707q.49.326.924.757A6 6 0 1 1 7 15.316"></svg:path>`,
})
export class RiContrast2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
