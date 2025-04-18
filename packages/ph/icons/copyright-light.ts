import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCopyrightLightIcon],svg[ph-copyright-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m-34-90a34 34 0 0 0 61.2 20.4a6 6 0 0 1 9.6 7.21a46 46 0 1 1 0-55.22a6 6 0 0 1-9.6 7.21A34 34 0 0 0 94 128"></svg:path>`,
})
export class PhCopyrightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
