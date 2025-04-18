import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenNotificationFill12Icon],svg[garden-notification-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.46 9H1.54a1 1 0 0 1-.99-1.13c.17-1.26.69-2.07 1.47-2.3C2.1 4.18 2.63 0 6 0s3.9 4.18 3.98 5.57c.77.23 1.3 1.04 1.47 2.3c.04.29-.05.58-.24.79s-.46.34-.75.34M6 12c1.1 0 2-.9 2-2H4c0 1.1.9 2 2 2"></svg:path>`,
})
export class GardenNotificationFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
