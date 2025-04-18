import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconUnlinkOutlineIcon],svg[lsicon-unlink-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m8.03 10.965l-1.56 1.561a2.125 2.125 0 1 1-3.005-3.005l1.561-1.562m6.07-.059l1.56-1.561a2.125 2.125 0 1 0-3.004-3.005L8.089 4.895M4 6.5H2M6.5 4V2m-2 2.5L3.086 3.086m9.828 9.828L11.5 11.5m.5-2h2M9.5 12v2"></svg:path>`,
})
export class LsiconUnlinkOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
