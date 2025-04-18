import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxRegisteredIcon],svg[bx-registered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.14 2a10 10 0 1 0 10 10a10 10 0 0 0-10-10m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path><svg:path fill="currentColor" d="M16.14 10a3 3 0 0 0-3-3h-5v10h2v-4h1.46l2.67 4h2.4l-2.75-4.12A3 3 0 0 0 16.14 10m-3 1h-3V9h3a1 1 0 0 1 0 2"></svg:path>`,
})
export class BxRegisteredIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
