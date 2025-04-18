import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotchesLightIcon],svg[ph-notches-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 132.24l-80 80a6 6 0 1 1-8.48-8.48l80-80a6 6 0 1 1 8.48 8.48m-16-96.48a6 6 0 0 0-8.48 0l-152 152a6 6 0 1 0 8.48 8.48l152-152a6 6 0 0 0 0-8.48"></svg:path>`,
})
export class PhNotchesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
