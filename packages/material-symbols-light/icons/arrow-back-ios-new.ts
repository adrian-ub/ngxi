import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowBackIosNewIcon],svg[material-symbols-light-arrow-back-ios-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21.308L6.692 12L16 2.692l1.064 1.064L8.819 12l8.244 8.244z"></svg:path>`,
})
export class MaterialSymbolsLightArrowBackIosNewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
