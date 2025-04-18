import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextAlignRightLightIcon],svg[ph-text-align-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m182 34H88a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12m0 40H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12m0 40H88a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhTextAlignRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
