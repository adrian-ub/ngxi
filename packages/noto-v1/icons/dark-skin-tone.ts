import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1DarkSkinToneIcon],svg[noto-v1-dark-skin-tone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#584539" d="M10 10h108v108H10z"></svg:path>`,
})
export class NotoV1DarkSkinToneIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
