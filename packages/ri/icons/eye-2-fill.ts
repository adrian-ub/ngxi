import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEye2FillIcon],svg[ri-eye-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 5c-.513 0-1.008.077-1.473.22a2.5 2.5 0 1 1-3.306 3.307A5 5 0 1 0 12 7"></svg:path>`,
})
export class RiEye2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
