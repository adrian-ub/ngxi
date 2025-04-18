import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneLiveHelpIcon],svg[ic-twotone-live-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18h4.83l.59.59L12 20.17l1.59-1.59l.58-.58H19V4H5zm8-1h-2v-2h2zM12 5c2.21 0 4 1.79 4 4c0 2.5-3 2.75-3 5h-2c0-3.25 3-3 3-5c0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4" opacity=".3"></svg:path><svg:path fill="currentColor" d="M21 4c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4l3 3l3-3h4c1.1 0 2-.9 2-2zm-2 14h-4.83l-.59.59L12 20.17l-1.59-1.59l-.58-.58H5V4h14zm-8-3h2v2h-2zm1-8c1.1 0 2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5c0-2.21-1.79-4-4-4S8 6.79 8 9h2c0-1.1.9-2 2-2"></svg:path>`,
})
export class IcTwotoneLiveHelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
