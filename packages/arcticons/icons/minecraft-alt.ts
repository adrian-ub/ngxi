import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinecraftAltIcon],svg[arcticons-minecraft-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="c"><svg:path d="m40.9 14.273l-.055 19.454L24.027 43.5l.056-19.453L40.9 14.273zm-16.817 9.774L24.027 43.5L7.1 33.727l.055-19.454l16.928 9.774z"></svg:path><svg:path d="m40.9 14.273l-16.817 9.774l-16.928-9.774L23.973 4.5L40.9 14.273z"></svg:path></svg:g>`,
})
export class ArcticonsMinecraftAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
