import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFluffyFallAltIcon],svg[arcticons-fluffy-fall-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.741 22.84c.477 2.209 1.685 2.962 3.259 2.962s2.782-.753 3.259-2.962m6.783-.642H44.5m-41 0h10.458"></svg:path>`,
})
export class ArcticonsFluffyFallAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
