import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpVerticalAlignBottomIcon],svg[ic-sharp-vertical-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 13h-3V3h-2v10H8l4 4zM4 19v2h16v-2z"></svg:path>`,
})
export class IcSharpVerticalAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
