import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPictureInPictureCenterOutlineSharpIcon],svg[material-symbols-light-picture-in-picture-center-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h18v14zm1-1h16V6H4zm0 0V6zm4.154-3.154h7.692V9.154H8.154z"></svg:path>`,
})
export class MaterialSymbolsLightPictureInPictureCenterOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
