import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWaveTriangleIcon],svg[hugeicons-wave-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M3 12h4.34a1 1 0 0 1 .92.606l2.584 6.029A.603.603 0 0 0 12 18.397V5.603a.603.603 0 0 1 1.157-.238l2.583 6.029a1 1 0 0 0 .92.606H21" color="currentColor"></svg:path>`,
})
export class HugeiconsWaveTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
