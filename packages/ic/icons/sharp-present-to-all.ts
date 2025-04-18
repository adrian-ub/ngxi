import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPresentToAllIcon],svg[ic-sharp-present-to-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v18h22zm-2 16.02H3V4.98h18zM10 12H8l4-4l4 4h-2v4h-4z"></svg:path>`,
})
export class IcSharpPresentToAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
