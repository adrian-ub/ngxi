import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAquariusIcon],svg[icon-park-aquarius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 20L14 8L20 17L28 8L35 19L44 9.04348"></svg:path><svg:path d="M4 40L14 28L20 37L28 28L35 39L44 29.0435"></svg:path></svg:g>`,
})
export class IconParkAquariusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
