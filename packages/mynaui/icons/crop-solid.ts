import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCropSolidIcon],svg[mynaui-crop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.35 3a.75.75 0 0 0-1.5 0v2.85H3a.75.75 0 1 0 0 1.5h2.85v5.282c0 .813 0 1.469.043 2c.045.546.14 1.026.366 1.47a3.75 3.75 0 0 0 1.639 1.64c.444.226.924.32 1.47.365c.531.043 1.187.043 2 .043h5.282V21a.75.75 0 1 0 1.5 0v-2.85H21a.75.75 0 1 0 0-1.5h-2.85v-5.282c0-.813 0-1.469-.043-2c-.045-.546-.14-1.026-.366-1.47a3.75 3.75 0 0 0-1.639-1.64c-.444-.226-.924-.32-1.47-.365c-.531-.043-1.187-.043-2-.043H7.35z"></svg:path>`,
})
export class MynauiCropSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
