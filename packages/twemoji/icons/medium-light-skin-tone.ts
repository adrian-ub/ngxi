import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiMediumLightSkinToneIcon],svg[twemoji-medium-light-skin-tone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F3D2A2" d="M33 30a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h24a3 3 0 0 1 3 3v24z"></svg:path>`,
})
export class TwemojiMediumLightSkinToneIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
