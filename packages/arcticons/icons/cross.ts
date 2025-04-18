import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrossIcon],svg[arcticons-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.02 17.98V5.5H17.98v12.48m12.04 12.04H42.5V17.98H30.02M17.98 30.02V42.5h12.04V30.02M17.98 17.98H5.5v12.04h12.48"></svg:path>`,
})
export class ArcticonsCrossIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
