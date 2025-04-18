import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBrailleBlindSolidIcon],svg[streamline-braille-blind-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.834 4.077c-.709 0-1.284.575-1.284 1.284v4.968h-.625a1.715 1.715 0 0 0-1.583 2.374L2.88 14h8.005v-3.086A2.573 2.573 0 0 0 8.313 8.34H7.119V5.36c0-.709-.575-1.284-1.285-1.284ZM5.794.584a.947.947 0 1 1 0 1.893a.947.947 0 0 1 0-1.893M9.469 3.91a.947.947 0 1 1 0 1.893a.947.947 0 0 1 0-1.893m2.687 0a.947.947 0 1 1 0 1.893a.947.947 0 0 1 0-1.893M1.845 5.803a.947.947 0 1 1 0-1.893a.947.947 0 0 1 0 1.893m0 3.31a.947.947 0 1 1 0-1.893a.947.947 0 0 1 0 1.893m0-8.53a.947.947 0 1 1 0 1.894a.947.947 0 0 1 0-1.893Zm10.31 0a.947.947 0 1 1 0 1.894a.947.947 0 0 1 0-1.893Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrailleBlindSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
