import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineRampLeftIcon],svg[ic-baseline-ramp-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21h-2V6.83L9.41 8.41L8 7l4-4l4 4l-1.41 1.41L13 6.83V9c0 4.27 4.03 7.13 6 8.27l-1.46 1.46c-1.91-1.16-3.44-2.53-4.54-4.02z"></svg:path>`,
})
export class IcBaselineRampLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
