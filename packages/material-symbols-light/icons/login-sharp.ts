import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLoginSharpIcon],svg[material-symbols-light-login-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.98 20v-1H19V5h-7.02V4H20v16zm-.71-4.461l-.703-.72l2.32-2.319H4.019v-1h8.868l-2.32-2.32l.702-.718L14.808 12z"></svg:path>`,
})
export class MaterialSymbolsLightLoginSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
