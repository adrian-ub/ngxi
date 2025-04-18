import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPowerLightIcon],svg[ph-power-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122 128V48a6 6 0 0 1 12 0v80a6 6 0 0 1-12 0m57.28-77a6 6 0 0 0-6.56 10C196.41 76.47 210 100.88 210 128a82 82 0 0 1-164 0c0-27.12 13.59-51.53 37.28-67a6 6 0 0 0-6.56-10C49.57 68.68 34 96.75 34 128a94 94 0 0 0 188 0c0-31.25-15.57-59.32-42.72-77"></svg:path>`,
})
export class PhPowerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
