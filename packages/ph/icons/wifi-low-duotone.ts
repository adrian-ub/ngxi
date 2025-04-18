import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWifiLowDuotoneIcon],svg[ph-wifi-low-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m171.68 167.88l-37.53 45.24a8 8 0 0 1-12.3 0l-37.53-45.24a68 68 0 0 1 87.36 0" opacity=".2"></svg:path><svg:path d="M247.89 80.91a15.93 15.93 0 0 0-6.17-10.81A186.67 186.67 0 0 0 128 32A186.67 186.67 0 0 0 14.28 70.1a15.93 15.93 0 0 0-6.17 10.81a15.65 15.65 0 0 0 3.54 11.89l104 125.43A15.93 15.93 0 0 0 128 224a15.93 15.93 0 0 0 12.31-5.77l104-125.43a15.65 15.65 0 0 0 3.58-11.89M128 208l-32.1-38.7a60 60 0 0 1 64.2 0Zm42.37-51.08a75.89 75.89 0 0 0-84.74 0L24.09 82.74A170.76 170.76 0 0 1 128 48a170.76 170.76 0 0 1 103.91 34.74Z"></svg:path></svg:g>`,
})
export class PhWifiLowDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
