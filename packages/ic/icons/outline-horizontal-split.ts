import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineHorizontalSplitIcon],svg[ic-outline-horizontal-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15v2H5v-2zm2-10H3v2h18zm0 4H3v2h18zm0 4H3v6h18z"></svg:path>`,
})
export class IcOutlineHorizontalSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
