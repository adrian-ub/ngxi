import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineAxisIcon],svg[material-symbols-light-line-axis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.5 18.23l-.73-.73l6.807-6.808l4 4l2.367-2.727l-6.33-5.848L3.5 12.231l-.73-.731l6.807-6.808l7.062 6.506l3.923-4.506l.707.67l-3.892 4.507l3.892 3.593l-.73.73l-3.85-3.55l-3.073 3.55l-4.039-4.038z"></svg:path>`,
})
export class MaterialSymbolsLightLineAxisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
