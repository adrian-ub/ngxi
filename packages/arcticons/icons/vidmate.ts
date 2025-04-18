import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVidmateIcon],svg[arcticons-vidmate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m4.5 13.247l3.207-1.862h8.89l13.51 25.265L43.5 11.35h-8.89l-8.938 16.885"></svg:path><svg:path d="M8.711 13.263L21.218 36.65h8.89M16.597 11.385l-3.207 1.862H4.5"></svg:path></svg:g>`,
})
export class ArcticonsVidmateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
