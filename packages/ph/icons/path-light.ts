import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPathLightIcon],svg[ph-path-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 170a30.05 30.05 0 0 0-29.4 24H72a34 34 0 0 1 0-68h96a38 38 0 0 0 0-76H72a6 6 0 0 0 0 12h96a26 26 0 0 1 0 52H72a46 46 0 0 0 0 92h98.6a30 30 0 1 0 29.4-36m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhPathLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
