import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreePointRightIcon],svg[icomoon-free-point-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 15H9a1.502 1.502 0 0 0 1.307-2.236a1.5 1.5 0 0 0 .31-2.264a1.5 1.5 0 0 0 .297-1.5H14.5c.827 0 1.5-.673 1.5-1.5S15.327 6 14.5 6H8.333l1.466-2.75a1.502 1.502 0 0 0-2.381-1.789l-.011.012L4 5.21V4.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-.691l2.276 1.138A.5.5 0 0 0 6.5 15m-4-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m4.118 0L4 12.691V6.694L8.143 2.15a.5.5 0 0 1 .782.614l-1.866 3.5a.502.502 0 0 0 .442.735h7a.5.5 0 0 1 0 1h-5a.5.5 0 0 0 0 1a.5.5 0 0 1 0 1a.5.5 0 0 0 0 1a.5.5 0 0 1 0 1h-.5a.5.5 0 0 0 0 1a.5.5 0 0 1 0 1H6.619z"></svg:path>`,
})
export class IcomoonFreePointRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
