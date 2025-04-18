import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignComponentStepsIcon],svg[tdesign-component-steps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12a3.5 3.5 0 0 1 6.855-1h.79a3.502 3.502 0 0 1 6.71 0h.79A3.502 3.502 0 0 1 23 12a3.5 3.5 0 0 1-6.855 1h-.79a3.502 3.502 0 0 1-6.71 0h-.79A3.502 3.502 0 0 1 1 12m3.5-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m7.5 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m7.5 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class TdesignComponentStepsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
