import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAirmeeIcon],svg[arcticons-airmee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.25 5.5h9.25v9.25h-9.25zM24 14.75H5.5V24h12.526l-5.708 6.916a6.42 6.42 0 0 1-4.953 2.334H5.5v9.25h3.296c3.77 0 7.344-1.684 9.744-4.592L24 31.293V42.5h9.25V14.75z"></svg:path>`,
})
export class ArcticonsAirmeeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
