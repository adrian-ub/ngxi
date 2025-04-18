import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phEggFillIcon],svg[ph-egg-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 152a88 88 0 0 1-176 0c0-30.77 10.7-64.46 29.34-92.44C87.53 32.29 109.46 16 128 16s40.47 16.29 58.66 43.56C205.3 87.54 216 121.23 216 152"></svg:path>`,
})
export class PhEggFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
