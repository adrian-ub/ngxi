import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPictureInPictureOffSharpIcon],svg[material-symbols-light-picture-in-picture-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.104 22.53L17.573 19H3V5h2l1 1H4.573L1.881 3.308l.713-.714l19.223 19.223zM21 18.19l-5.496-5.497H19V7h-7.692v1.496L7.812 5H21z"></svg:path>`,
})
export class MaterialSymbolsLightPictureInPictureOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
