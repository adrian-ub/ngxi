import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHeartBreakLightIcon],svg[ph-heart-break-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178 42a59.63 59.63 0 0 0-42.43 17.57L128 67.15l-7.57-7.58A60 60 0 0 0 18 102c0 29.2 18.2 59.59 54.1 90.31a334.7 334.7 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.7 334.7 0 0 0 53.06-37C219.8 161.59 238 131.2 238 102a60.07 60.07 0 0 0-60-60m-50 175.11c-16.41-9.47-98-59.39-98-115.11a48 48 0 0 1 81.94-33.94l7.57 7.57l-11.75 11.76a6 6 0 0 0 0 8.49l25.94 25.94l-17.94 17.94a6 6 0 0 0 8.48 8.48l22.19-22.18a6 6 0 0 0 0-8.49l-25.94-25.94l23.57-23.57A48 48 0 0 1 226 102c0 55.72-81.59 105.64-98 115.11"></svg:path>`,
})
export class PhHeartBreakLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
