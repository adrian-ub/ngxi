import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUnlinkIcon],svg[grommet-icons-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m17 11l4.586 4.586a2 2 0 0 1 0 2.828l-3.172 3.172a2 2 0 0 1-2.828 0L11 17m6-9h4m-5-1V3M8 21v-4m-5-1h4m0-3L2.414 8.414a2 2 0 0 1 0-2.828l3.172-3.172a2 2 0 0 1 2.828 0L13 7"></svg:path>`,
})
export class GrommetIconsUnlinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
