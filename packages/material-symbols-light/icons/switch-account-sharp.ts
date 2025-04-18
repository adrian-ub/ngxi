import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwitchAccountSharpIcon],svg[material-symbols-light-switch-account-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.998 11.462q1.04 0 1.771-.729t.731-1.77t-.728-1.77t-1.77-.731t-1.771.728t-.731 1.77t.729 1.77t1.769.732M7 17V3h14v14zm-4 4V7h1v13h13v1zm5.577-5h10.846q-1.05-1.175-2.451-1.818q-1.402-.644-2.969-.644t-2.971.644T8.577 16"></svg:path>`,
})
export class MaterialSymbolsLightSwitchAccountSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
