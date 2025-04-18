import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHomeMiniIcon],svg[material-symbols-light-home-mini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6q1.689 0 3.306.376t2.883 1.129t2.038 1.87T21 12H3q0-1.508.773-2.625t2.039-1.87t2.882-1.129T12 6M9 18q-2.215 0-3.87-1.416Q3.475 15.167 3.108 13h17.784q-.367 2.167-2.022 3.584Q17.216 18 15 18z"></svg:path>`,
})
export class MaterialSymbolsLightHomeMiniIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
