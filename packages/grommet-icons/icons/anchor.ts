import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsAnchorIcon],svg[grommet-icons-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm8 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM4 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm8-11v15m-8-5.027Q7.29 21 12 21t8-5.027M16 10H8"></svg:path>`,
})
export class GrommetIconsAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
