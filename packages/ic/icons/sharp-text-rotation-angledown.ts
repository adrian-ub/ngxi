import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpTextRotationAngledownIcon],svg[ic-sharp-text-rotation-angledown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21v-4.24l-1.41 1.41l-9.2-9.19l-1.41 1.41l9.19 9.19L10.76 21zM11.25 8.48l3.54 3.54l-.92 2.19l1.48 1.48l4.42-11.14l-1.06-1.05L7.57 7.92L9.06 9.4zm6.59-3.05l-2.23 4.87l-2.64-2.64z"></svg:path>`,
})
export class IcSharpTextRotationAngledownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
