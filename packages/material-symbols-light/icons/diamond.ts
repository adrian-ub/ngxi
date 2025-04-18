import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDiamondIcon],svg[material-symbols-light-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.027 8.558L11.562 3.5h.877l2.534 5.058zm2.53 11.119L3.03 9.442h8.529zm.885 0V9.442h8.53zm3.508-11.12L13.427 3.5h5.265l2.53 5.058zm-13.171 0L5.308 3.5h5.265L8.05 8.558z"></svg:path>`,
})
export class MaterialSymbolsLightDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
