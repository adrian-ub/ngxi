import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOptumrxIcon],svg[arcticons-optumrx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.036 16.964L16.964 31.036m5.744-22.4l16.657 16.656c4.062 4.063 4.194 10.468.294 14.368c-3.896 3.9-10.304 3.767-14.367-.295L8.635 22.708C4.573 18.645 4.441 12.24 8.341 8.34s10.305-3.768 14.367.294Z"></svg:path>`,
})
export class ArcticonsOptumrxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
