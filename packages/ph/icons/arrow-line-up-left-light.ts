import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpLeftLightIcon],svg[ph-arrow-line-up-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 208a6 6 0 0 1-6 6H48a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M72 150a6 6 0 0 0 6-6V62.49l101.76 101.75a6 6 0 0 0 8.48-8.48L86.49 54H168a6 6 0 0 0 0-12H72a6 6 0 0 0-6 6v96a6 6 0 0 0 6 6"></svg:path>`,
})
export class PhArrowLineUpLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
