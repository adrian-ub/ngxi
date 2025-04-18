import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTurnLeftSharpIcon],svg[material-symbols-light-turn-left-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.52 19v-8.5H5.915l2.1 2.1l-.708.708L4 10l3.308-3.308l.708.708l-2.1 2.1h10.603V19z"></svg:path>`,
})
export class MaterialSymbolsLightTurnLeftSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
