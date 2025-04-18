import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsArchiveReaderAo3Icon],svg[arcticons-archive-reader-ao3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.5v37m17.7-29.1H6.3M34 33.8H14m10-20.4c-4.4 8-11.6 16.3-17.3 21.1M24 13.4c4.4 8 11.6 16.3 17.3 21.1"></svg:path>`,
})
export class ArcticonsArchiveReaderAo3Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
