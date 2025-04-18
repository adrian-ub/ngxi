import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfCheckmarkIcon],svg[wpf-checkmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.567 4.73l-1.795-1.219a1.09 1.09 0 0 0-1.507.287l-8.787 12.959l-4.039-4.039a1.09 1.09 0 0 0-1.533 0l-1.533 1.536a1.084 1.084 0 0 0 0 1.534L9.582 22c.349.347.895.615 1.387.615s.988-.31 1.307-.774l10.58-15.606a1.085 1.085 0 0 0-.289-1.505"></svg:path>`,
})
export class WpfCheckmarkIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
