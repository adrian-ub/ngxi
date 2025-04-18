import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPictureInPictureAltOutlineSharpIcon],svg[material-symbols-light-picture-in-picture-alt-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h18v14zm1-1h16V6H4zm0 0V6zm7.308-1.038H19v-5.693h-7.692zm1-1v-3.693H18v3.692z"></svg:path>`,
})
export class MaterialSymbolsLightPictureInPictureAltOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
