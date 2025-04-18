import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineTextRotationAngleupIcon],svg[ic-baseline-text-rotation-angleup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.49 4.21L3.43 5.27L7.85 16.4l1.48-1.48l-.92-2.19l3.54-3.54l2.19.92l1.48-1.48zm3.09 6.8L5.36 6.14l4.87 2.23zm12.99-1.68h-4.24l1.41 1.41l-8.84 8.84L10.32 21l8.84-8.84l1.41 1.41z"></svg:path>`,
})
export class IcBaselineTextRotationAngleupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
