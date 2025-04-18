import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFormatVerticalAlignRightIcon],svg[tdesign-format-vertical-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h20v2H2zm6 7h14v2H8zm-5 7H2v2h20v-2z"></svg:path>`,
})
export class TdesignFormatVerticalAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
