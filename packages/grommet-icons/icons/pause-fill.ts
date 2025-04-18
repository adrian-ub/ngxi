import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsPauseFillIcon],svg[grommet-icons-pause-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M3 21h6V3H3zm1-2h4V5H4zm1-2h2V7H5zm10 4h6V3h-6zm1-2h4V5h-4zm1-2h2V7h-2z"></svg:path>`,
})
export class GrommetIconsPauseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
