import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDownLeftLightIcon],svg[ph-arrow-bend-down-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 56a102.12 102.12 0 0 1-102 102H46.49l37.75 37.76a6 6 0 1 1-8.48 8.48l-48-48a6 6 0 0 1 0-8.48l48-48a6 6 0 0 1 8.48 8.48L46.49 146H128a90.1 90.1 0 0 0 90-90a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhArrowBendDownLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
