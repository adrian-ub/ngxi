import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsLeftRightLightIcon],svg[ph-arrows-left-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.24 171.76a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48-8.48L193.51 182H48a6 6 0 0 1 0-12h145.51l-21.75-21.76a6 6 0 0 1 8.48-8.48ZM75.76 116.24a6 6 0 0 0 8.48-8.48L62.49 86H208a6 6 0 0 0 0-12H62.49l21.75-21.76a6 6 0 0 0-8.48-8.48l-32 32a6 6 0 0 0 0 8.48Z"></svg:path>`,
})
export class PhArrowsLeftRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
