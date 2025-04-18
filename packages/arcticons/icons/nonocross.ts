import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNonocrossIcon],svg[arcticons-nonocross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.05 40.3l2.3-13.3M12.25 8.8l5.6 12.7m17-13.1L30.35 27L19.75 7.8l-7.5 1l-6.8 29.1M42.35 10l-6.7 29l-7.6 1.3l-10.2-18.8l-4.9 18a3.84 3.84 0 0 1-4.5 2.8a3.9 3.9 0 0 1-3-4.4m29.4-29.5a3.84 3.84 0 0 1 4.5-2.8a3.9 3.9 0 0 1 3 4.4"></svg:path>`,
})
export class ArcticonsNonocrossIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
