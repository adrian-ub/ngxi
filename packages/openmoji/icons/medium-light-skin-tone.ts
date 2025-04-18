import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMediumLightSkinToneIcon],svg[openmoji-medium-light-skin-tone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#debb90" d="M59.035 60h-46.07a.968.968 0 0 1-.965-.965v-46.07a.968.968 0 0 1 .965-.965h46.07a.968.968 0 0 1 .965.965v46.07a.968.968 0 0 1-.965.965z"></svg:path><svg:path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M59.035 60h-46.07a.968.968 0 0 1-.965-.965v-46.07a.968.968 0 0 1 .965-.965h46.07a.968.968 0 0 1 .965.965v46.07a.968.968 0 0 1-.965.965z"></svg:path>`,
})
export class OpenmojiMediumLightSkinToneIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
