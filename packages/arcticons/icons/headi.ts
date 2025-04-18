import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHeadiIcon],svg[arcticons-headi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.49 18.35a15.34 15.34 0 0 0-30.61 1.49l-3.74 3.74a2.36 2.36 0 0 0 1.66 4h2.08v4.47a5.27 5.27 0 0 0 5.27 5.27h0v6.18h17.59V33.2a15.36 15.36 0 0 0 7.75-14.85"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.53 12.32l-5.17 8h5.17l-3.88 7.57"></svg:path>`,
})
export class ArcticonsHeadiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
