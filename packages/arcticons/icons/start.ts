import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStartIcon],svg[arcticons-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.509 14.952A21.1 21.1 0 0 0 2.5 24a21.4 21.4 0 0 0 6.963 15.838M36.07 6.192C41.75 10.056 45.5 16.597 45.5 24a21 21 0 0 1-.842 5.949M31.307 3.782A21.1 21.1 0 0 0 24 2.5a21.3 21.3 0 0 0-13.734 4.973a20.7 20.7 0 0 0-3.31 3.405h.007l35.896 23.46l.001-.009a21.3 21.3 0 0 1-2.754 3.883A21.33 21.33 0 0 1 24 45.5c-3.692 0-7.154-.937-10.195-2.563"></svg:path>`,
})
export class ArcticonsStartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
