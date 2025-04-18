import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpAlignHorizontalRightIcon],svg[ic-sharp-align-horizontal-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2h2v20h-2zM2 10h16V7H2zm6 7h10v-3H8z"></svg:path>`,
})
export class IcSharpAlignHorizontalRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
