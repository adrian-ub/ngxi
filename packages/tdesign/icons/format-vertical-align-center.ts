import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFormatVerticalAlignCenterIcon],svg[tdesign-format-vertical-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h20v2H2zm3 7h14v2H5zm-2 7H2v2h20v-2z"></svg:path>`,
})
export class TdesignFormatVerticalAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
