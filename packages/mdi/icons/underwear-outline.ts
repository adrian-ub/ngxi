import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiUnderwearOutlineIcon],svg[mdi-underwear-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4c-.55 0-1 .45-1 1v5c0 5.5 4.5 10 10 10s10-4.5 10-10V5c0-.55-.45-1-1-1zm17 2v2H4V6zM4 10h16c0 .34 0 .67-.06 1A6.996 6.996 0 0 0 13 17.94c-.33.06-.66.06-1 .06s-.67 0-1-.06A6.996 6.996 0 0 0 4.06 11C4 10.67 4 10.34 4 10m11.04 7.4a4.99 4.99 0 0 1 4.37-4.36a8.18 8.18 0 0 1-4.38 4.37M4.6 13.04c2.28.27 4.1 2.08 4.37 4.37a8.12 8.12 0 0 1-4.37-4.38Z"></svg:path>`,
})
export class MdiUnderwearOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
