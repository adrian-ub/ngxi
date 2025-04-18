import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFormatHorizontalAlignBottomIcon],svg[tdesign-format-horizontal-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2v20H4V2zm14 0v20h-2V2zm-7 6v14h-2V8z"></svg:path>`,
})
export class TdesignFormatHorizontalAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
