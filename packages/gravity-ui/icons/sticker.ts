import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiStickerIcon],svg[gravity-ui-sticker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h3v-2.5a3 3 0 0 1 3-3H13v-3A1.5 1.5 0 0 0 11.5 3m1.303 6a1.5 1.5 0 0 1-.242.318l-3.243 3.243a1.5 1.5 0 0 1-.318.242V10.5A1.5 1.5 0 0 1 10.5 9zm.818 1.379a3 3 0 0 0 .879-2.122V4.5a3 3 0 0 0-3-3h-7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h3.757a3 3 0 0 0 2.122-.879z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiStickerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
