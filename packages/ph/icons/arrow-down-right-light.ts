import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowDownRightLightIcon],svg[ph-arrow-down-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 88v104a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h89.52L59.76 68.24a6 6 0 0 1 8.48-8.48L186 177.52V88a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhArrowDownRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
