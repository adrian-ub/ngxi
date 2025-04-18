import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowUpwardAltIcon],svg[material-symbols-light-arrow-upward-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 17.308V7.416l-4.1 4.1l-.708-.708L12 5.5l5.308 5.308l-.708.708l-4.1-4.1v9.892z"></svg:path>`,
})
export class MaterialSymbolsLightArrowUpwardAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
