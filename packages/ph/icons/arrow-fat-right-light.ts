import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowFatRightLightIcon],svg[ph-arrow-fat-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.24 123.76l-96-96A6 6 0 0 0 130 32v42H48a14 14 0 0 0-14 14v80a14 14 0 0 0 14 14h82v42a6 6 0 0 0 10.24 4.24l96-96a6 6 0 0 0 0-8.48M142 209.51V176a6 6 0 0 0-6-6H48a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h88a6 6 0 0 0 6-6V46.49L223.51 128Z"></svg:path>`,
})
export class PhArrowFatRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
