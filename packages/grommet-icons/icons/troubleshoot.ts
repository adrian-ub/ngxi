import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTroubleshootIcon],svg[grommet-icons-troubleshoot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 5c0-2 1-4 2-4l2 4h2l2-4c1 0 2 2 2 4c0 2.254-1 4-3 5v11c0 1 0 2-2 2s-2-1-2-2V10C2 9 1 7.254 1 5Zm18 7v6m-2 0l1 5h2l1-5zm-3-6h10zm7 0V3a2 2 0 1 0-4 0v9"></svg:path>`,
})
export class GrommetIconsTroubleshootIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
