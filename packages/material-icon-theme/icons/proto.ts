import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeProtoIcon],svg[material-icon-theme-proto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00bfa5" d="M16 27L2 19v-5l14 8z"></svg:path><svg:path fill="#ffeb3b" d="m30 14l-14 8v5l14-8z"></svg:path><svg:path fill="#ff5722" d="M16 6L2 14v5l14-8z"></svg:path><svg:path fill="#00e676" d="m30 19l-14-8V6l14 8z"></svg:path><svg:path fill="#03a9f4" d="M16 27L2 19v-5l14 8z"></svg:path>`,
})
export class MaterialIconThemeProtoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
