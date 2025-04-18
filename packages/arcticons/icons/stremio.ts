import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStremioIcon],svg[arcticons-stremio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.78 24H43.5m-22.66 0H4.5m26.28 0l-9.94 7.43V16.57Zm12.72 0L24 43.5L4.5 24L24 4.5Z"></svg:path>`,
})
export class ArcticonsStremioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
