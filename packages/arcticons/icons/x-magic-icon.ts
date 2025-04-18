import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsXMagicIconIcon],svg[arcticons-x-magic-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.371 26.92c0-7.002-5.676-12.679-12.679-12.679s-12.679 5.677-12.679 12.68c0 5.533-5.513 8.107-5.513 8.107s6.137 4.571 18.192 4.571c7.003 0 12.68-5.676 12.68-12.679"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.176 15.493l8.494-7.092l6.83 6.83l-8.145 11.175"></svg:path>`,
})
export class ArcticonsXMagicIconIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
