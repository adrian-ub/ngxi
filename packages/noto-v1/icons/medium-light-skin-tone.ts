import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1MediumLightSkinToneIcon],svg[noto-v1-medium-light-skin-tone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e0bb95" d="M10 10h108v108H10z"></svg:path>`,
})
export class NotoV1MediumLightSkinToneIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
