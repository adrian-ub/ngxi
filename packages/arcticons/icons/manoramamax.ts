import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsManoramamaxIcon],svg[arcticons-manoramamax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.75 24L5.5 40.67V7.33h37v33.34L33.25 24L24 40.67L5.5 7.33"></svg:path>`,
})
export class ArcticonsManoramamaxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
