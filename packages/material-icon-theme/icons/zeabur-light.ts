import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeZeaburLightIcon],svg[material-icon-theme-zeabur-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#263238" d="m14 20l4 4l-4 4H2v-8h8l10-8l-6-4l6-4h10v8Z"></svg:path><svg:path fill="#651fff" d="M20 4H2v8h18Z"></svg:path><svg:path fill="#ff3d00" d="M30 20H14v8h16Z"></svg:path>`,
})
export class MaterialIconThemeZeaburLightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
