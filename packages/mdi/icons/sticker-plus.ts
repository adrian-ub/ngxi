import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStickerPlusIcon],svg[mdi-sticker-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 2h-13C3.6 2 2 3.6 2 5.5v13C2 20.4 3.6 22 5.5 22H16l6-6V5.5C22 3.6 20.4 2 18.5 2M13 16h-2v-3H8v-2h3V8h2v3h3v2h-3zm2 4v-1.5c0-1.9 1.6-3.5 3.5-3.5H20z"></svg:path>`,
})
export class MdiStickerPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
