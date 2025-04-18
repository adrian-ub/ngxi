import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEditAttributesRoundedIcon],svg[material-symbols-light-edit-attributes-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 16q-1.671 0-2.835-1.164Q3 13.67 3 12t1.165-2.835T7 8h10q1.671 0 2.836 1.165Q21 10.329 21 12t-1.164 2.836T17 16zm1.616-2.727l2.209-2.21q.129-.128.139-.303q.009-.175-.139-.323t-.313-.148t-.314.148L8.05 12.585l-.648-.649q-.129-.128-.304-.138t-.323.139t-.148.313t.148.314l.71.709q.242.243.565.243t.565-.243"></svg:path>`,
})
export class MaterialSymbolsLightEditAttributesRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
