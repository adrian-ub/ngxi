import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonJoinRightIcon],svg[carbon-join-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6a9.95 9.95 0 0 0-4.003.84a9.99 9.99 0 0 1 0 18.32A9.999 9.999 0 1 0 20 6"></svg:path><svg:path fill="none" d="M20 16a8.01 8.01 0 0 0-6.248-7.8a10 10 0 0 1 2.245-1.36a9.99 9.99 0 0 1 0 18.32a10 10 0 0 1-2.245-1.36A8.01 8.01 0 0 0 20 16"></svg:path><svg:path fill="currentColor" d="M10 16a9.98 9.98 0 0 0 3.752 7.8a7.994 7.994 0 0 0 0-15.6A9.98 9.98 0 0 0 10 16"></svg:path><svg:path fill="currentColor" d="M12 24a8 8 0 1 1 1.752-15.8a10 10 0 0 1 2.245-1.36a10 10 0 1 0 0 18.32a10 10 0 0 1-2.245-1.36A8 8 0 0 1 12 24"></svg:path>`,
})
export class CarbonJoinRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
