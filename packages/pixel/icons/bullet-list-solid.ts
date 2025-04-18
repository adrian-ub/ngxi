import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelBulletListSolidIcon],svg[pixel-bullet-list-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h3v3H2zm0 12h3v3H2zm0-6h3v3H2zm21-5v1h-1v1H10V7H9V6h1V5h12v1zm-1 6h1v1h-1v1H10v-1H9v-1h1v-1h12zm0 6h1v1h-1v1H10v-1H9v-1h1v-1h12z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelBulletListSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
