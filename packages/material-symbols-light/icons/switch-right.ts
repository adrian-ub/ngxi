import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwitchRightIcon],svg[material-symbols-light-switch-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 17.48L4.52 12L10 6.52zm4 0V6.52L19.48 12zm.885-2.124L18.24 12l-3.356-3.356z"></svg:path>`,
})
export class MaterialSymbolsLightSwitchRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
