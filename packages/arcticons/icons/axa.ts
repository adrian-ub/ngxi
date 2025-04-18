import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAxaIcon],svg[arcticons-axa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 6.765L28.139 25.54m-1.06 1.768L15.92 41.235m-10.42 0l10.695-13.927l4.073 13.927l10.673-13.927l4.073 13.927M20.196 27.308l4.8 13.927m-14.148-6.963h7.384m7.373 0h7.373"></svg:path>`,
})
export class ArcticonsAxaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
