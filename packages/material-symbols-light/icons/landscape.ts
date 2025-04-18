import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLandscapeIcon],svg[material-symbols-light-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.904 17l4.192-5.616L10.558 16h2.544l-2.64-3.5l3.634-4.846l7 9.346z"></svg:path>`,
})
export class MaterialSymbolsLightLandscapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
