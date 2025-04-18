import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHorizontalDistributeIcon],svg[material-symbols-light-horizontal-distribute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h1.23v18zm8-4.5v-9h2v9zm8.77 4.5V3H21v18z"></svg:path>`,
})
export class MaterialSymbolsLightHorizontalDistributeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
