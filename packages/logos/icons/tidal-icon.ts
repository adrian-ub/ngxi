import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosTidalIconIcon],svg[logos-tidal-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0A0B09" d="m128.004 85.339l42.664 42.67l-42.664 42.667l-42.669-42.667zM42.667.002L85.335 42.67L42.667 85.34L0 42.67zm170.666 0L256 42.67l-42.667 42.67l-42.666-42.67l-42.663 42.669l-42.669-42.67L128.004 0l42.663 42.665z"></svg:path>`,
})
export class LogosTidalIconIcon {
  readonly viewBox = input("0 0 256 171")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
