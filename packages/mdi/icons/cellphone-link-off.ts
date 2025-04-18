import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCellphoneLinkOffIcon],svg[mdi-cellphone-link-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 8h-6a1 1 0 0 0-1 1v4.18l2 2V10h4v7h-2.18l3 3H23a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M4 6.27L14.73 17H4zM1.92 1.65L.65 2.92l1.82 1.82A1.9 1.9 0 0 0 2 6v11H0v3h17.73l2.35 2.35l1.27-1.27L3.89 3.62zM22 6V4H6.82l2 2z"></svg:path>`,
})
export class MdiCellphoneLinkOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
