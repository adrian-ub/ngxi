import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBeakerIcon],svg[proicons-beaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.456 3.75v5.09a3 3 0 0 1-.557 1.742l-1.736 2.436M9.456 3.75h-1.65m1.65 0h5.088m0 0v5.09a3 3 0 0 0 .557 1.742l1.736 2.436M14.544 3.75h1.65m-9.031 9.268l-2.378 3.337a2.465 2.465 0 0 0 2.007 3.895h10.416a2.465 2.465 0 0 0 2.007-3.895l-2.378-3.337m-9.674 0h9.674"></svg:path>`,
})
export class ProiconsBeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
