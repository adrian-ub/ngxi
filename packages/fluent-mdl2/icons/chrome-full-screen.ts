import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ChromeFullScreenIcon],svg[fluent-mdl2-chrome-full-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 0v819h-205V350L350 1843h469v205H0v-819h205v469L1698 205h-469V0z"></svg:path>`,
})
export class FluentMdl2ChromeFullScreenIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
