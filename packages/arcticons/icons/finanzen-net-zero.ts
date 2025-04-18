import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFinanzenNetZeroIcon],svg[arcticons-finanzen-net-zero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 21.5v13c0 4.432-3.568 8-8 8h-21c-4.432 0-8-3.568-8-8l37-21c0-4.432-3.568-8-8-8h-21c-4.432 0-8 3.568-8 8v13"></svg:path>`,
})
export class ArcticonsFinanzenNetZeroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
