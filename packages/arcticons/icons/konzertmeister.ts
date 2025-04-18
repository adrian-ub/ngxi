import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKonzertmeisterIcon],svg[arcticons-konzertmeister-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.54 5.5H42.5L26.566 24l15.878 18.5H5.5m5.854-33.24v29.618m0-10.316L27.273 9.359m0 29.519L15.078 24.069"></svg:path>`,
})
export class ArcticonsKonzertmeisterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
