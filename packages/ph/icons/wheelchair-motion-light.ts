import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWheelchairMotionLightIcon],svg[ph-wheelchair-motion-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 78a30 30 0 1 0-30-30a30 30 0 0 0 30 30m0-48a18 18 0 1 1-18 18a18 18 0 0 1 18-18m-10 138a62 62 0 1 1-62-62a6 6 0 0 1 0 12a50 50 0 1 0 50 50a6 6 0 0 1 12 0m38.64-35.8a6 6 0 0 1 1.24 5l-16 80A6 6 0 0 1 184 222a6 6 0 0 1-1.19-.12a6 6 0 0 1-4.7-7.06L192.68 142H128a6 6 0 0 1-5.2-9l21.07-36.68a82.05 82.05 0 0 0-92.05 8.41a6 6 0 1 1-7.64-9.25a94 94 0 0 1 111.1-6.28a6 6 0 0 1 1.92 8L138.37 130H200a6 6 0 0 1 4.64 2.2"></svg:path>`,
})
export class PhWheelchairMotionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
