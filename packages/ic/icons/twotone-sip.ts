import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSipIcon],svg[ic-twotone-sip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 10.5h2v1h-2z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M4 18h16V6H4zm10-9h4c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-2.5v2H14zm-3 0h2v6h-2zm-6 4.5h3.5v-.75H6c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h4v1.5H6.5v.75H9c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M10 14v-1.75c0-.55-.45-1-1-1H6.5v-.75H10V9H6c-.55 0-1 .45-1 1v1.75c0 .55.45 1 1 1h2.5v.75H5V15h4c.55 0 1-.45 1-1"></svg:path><svg:path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16z"></svg:path><svg:path fill="currentColor" d="M11 9h2v6h-2zm4.5 4H18c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-4v6h1.5zm0-2.5h2v1h-2z"></svg:path>`,
})
export class IcTwotoneSipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
