import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotonePresentToAllIcon],svg[ic-twotone-present-to-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19.02h18V4.98H3zM12 8l4 4h-2v4h-4v-4H8z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M10 16h4v-4h2l-4-4l-4 4h2zM21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m0 16.02H3V4.98h18z"></svg:path>`,
})
export class IcTwotonePresentToAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
