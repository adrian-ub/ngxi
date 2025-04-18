import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCopyleftLightIcon],svg[ph-copyleft-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m46-90a46 46 0 0 1-82.8 27.61a6 6 0 0 1 9.6-7.21a34 34 0 1 0 0-40.8a6 6 0 0 1-9.6-7.21A46 46 0 0 1 174 128"></svg:path>`,
})
export class PhCopyleftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
