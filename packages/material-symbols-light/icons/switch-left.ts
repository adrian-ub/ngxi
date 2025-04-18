import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwitchLeftIcon],svg[material-symbols-light-switch-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 17.48L4.52 12L10 6.52zm-.885-2.124V8.644L5.76 12zM14 17.48V6.519L19.48 12z"></svg:path>`,
})
export class MaterialSymbolsLightSwitchLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
