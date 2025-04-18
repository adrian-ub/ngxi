import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCardekhoIcon],svg[arcticons-cardekho-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.62 31.86l-2.33 13.31C10.19 43.42 2.5 34.61 2.5 24S10.19 4.58 20.29 2.83l2.33 13.31c-3.75.65-6.6 3.92-6.6 7.86s2.85 7.21 6.6 7.86M45.5 24c0 10.61-7.69 19.42-17.79 21.17l-2.33-13.31c3.75-.65 6.6-3.92 6.6-7.86s-2.85-7.21-6.6-7.86l2.33-13.31C37.81 4.58 45.5 13.39 45.5 24"></svg:path>`,
})
export class ArcticonsCardekhoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
