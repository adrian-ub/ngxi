import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStylusIcon],svg[material-symbols-light-stylus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.027 19.917q-.429.087-.73-.214q-.3-.301-.214-.73l.644-3.134l3.435 3.434zm3.894-1.292l-3.546-3.546L15.739 4.734q.459-.459 1.136-.459t1.137.46l1.254 1.254q.459.459.459 1.136t-.46 1.137z"></svg:path>`,
})
export class MaterialSymbolsLightStylusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
