import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHideImageSharpIcon],svg[material-symbols-light-hide-image-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17.15L6.85 4H20zm.492 4.758L18.585 20H4V5.416L2.092 3.508L2.8 2.8l18.4 18.4zM7.5 16.5h7.579l-2.35-2.35l-1.517 1.889l-1.75-2.116z"></svg:path>`,
})
export class MaterialSymbolsLightHideImageSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
