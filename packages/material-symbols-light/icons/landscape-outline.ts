import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLandscapeOutlineIcon],svg[material-symbols-light-landscape-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.904 17l4.192-5.616L10.558 16h8.538l-5-6.65l-3 3.992l-.634-.842l3.634-4.846l7 9.346zm2-1h4.404l-2.212-2.964zm0 0h4.404z"></svg:path>`,
})
export class MaterialSymbolsLightLandscapeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
