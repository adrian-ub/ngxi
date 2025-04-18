import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeviceInfoIcon],svg[arcticons-device-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.34 15.238l-1.879 1.536l.39 2.395l2.27.86L31 18.493m-4.149.676l-5.702 4.662m-1.489 3.931l1.879-1.536l-.39-2.395l-2.27-.86L17 24.507"></svg:path><svg:rect width="21" height="37" x="13.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 37.5h21m-8 2.5h-5"></svg:path>`,
})
export class ArcticonsDeviceInfoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
