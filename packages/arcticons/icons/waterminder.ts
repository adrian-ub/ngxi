import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWaterminderIcon],svg[arcticons-waterminder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.49 29.01C38.49 18.36 24 4.5 24 4.5S9.51 18.36 9.51 29.01c0 8.003 6.488 14.49 14.49 14.49s14.49-6.487 14.49-14.49"></svg:path>`,
})
export class ArcticonsWaterminderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
