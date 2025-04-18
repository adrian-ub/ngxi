import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWidthIcon],svg[material-symbols-light-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.289 15.27L4 11.98l3.289-3.288l.713.708l-2.08 2.1h12.157l-2.056-2.1l.689-.688L20 12l-3.288 3.288l-.689-.688l2.056-2.1H5.902l2.075 2.08z"></svg:path>`,
})
export class MaterialSymbolsLightWidthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
