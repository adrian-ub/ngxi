import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPictureInPictureOffOutlineSharpIcon],svg[material-symbols-light-picture-in-picture-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.504 12.692H19V7h-7.692v1.496l1 1V8H18v3.692h-3.496zM20 17.19V6H8.812l-1-1H21v13.189zm1.104 5.342L17.573 19H3V5h2l1 1H4v12h12.573L1.881 3.308l.713-.714l19.223 19.223z"></svg:path>`,
})
export class MaterialSymbolsLightPictureInPictureOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
