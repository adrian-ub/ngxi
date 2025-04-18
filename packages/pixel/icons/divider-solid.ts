import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelDividerSolidIcon],svg[pixel-divider-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7H3V6h1V5h16v1h1v1h-1v1H4zm16 10h1v1h-1v1H4v-1H3v-1h1v-1h16zM1 11h22v2H1z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelDividerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
