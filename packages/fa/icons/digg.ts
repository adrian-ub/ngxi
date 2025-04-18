import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faDiggIcon],svg[fa-digg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M328 26h204v983H0V312h328zm0 819V476H205v369zm286-533v697h205V312zm0-286v204h205V26zm287 286h533v942H901v-163h328v-82H901zm328 533V476h-123v369zm287-533h532v942h-532v-163h327v-82h-327zm327 533V476h-123v369z"></svg:path>`,
})
export class FaDiggIcon {
  readonly viewBox = input("0 0 2048 1280")
  readonly width = input("1.6em")
  readonly height = input("1em")
}
