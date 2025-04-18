import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForPalestinianTerritoriesIcon],svg[emojione-flag-for-palestinian-territories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#699635" d="M60 42c-5.5 0-10-4.5-10-10H10.8v21.2C16.2 58.6 23.7 62 32 62c13.1 0 24.2-8.4 28.3-20z"></svg:path><svg:path fill="#3e4347" d="M60 22h.3C56.2 10.4 45.1 2 32 2c-8.3 0-15.8 3.4-21.2 8.8V32H50c0-5.5 4.5-10 10-10"></svg:path><svg:path fill="#f9f9f9" d="M60.3 22H10.8v20h49.5c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10"></svg:path><svg:path fill="#c94747" d="M10.8 10.8C5.4 16.2 2 23.7 2 32s3.4 15.8 8.8 21.2L32 32z"></svg:path>`,
})
export class EmojioneFlagForPalestinianTerritoriesIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
