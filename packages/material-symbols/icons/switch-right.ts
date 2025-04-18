import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSwitchRightIcon],svg[material-symbols-switch-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 19l-7-7l7-7zm4 0V5l7 7zm1.5-3.625L18.875 12L15.5 8.625z"></svg:path>`,
})
export class MaterialSymbolsSwitchRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
