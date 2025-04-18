import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusicoletIcon],svg[arcticons-musicolet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.52 4.5a1.14 1.14 0 0 0-1.15 1.15v36.7a1.13 1.13 0 0 0 1.68 1l15.51-9.18L40.07 25a1.17 1.17 0 0 0 0-2l-15.51-9.17L9.05 4.65a1.2 1.2 0 0 0-.53-.15m12 14.78v11.26h0v0a3.26 3.26 0 0 1-3.49 3a3.26 3.26 0 0 1-3.49-3a3.26 3.26 0 0 1 3.49-3a4.19 4.19 0 0 1 3.5 1.63V15.72a5.2 5.2 0 0 0 .28 1.54a5.3 5.3 0 0 0 1 1.09a5.18 5.18 0 0 1 2 4.2"></svg:path>`,
})
export class ArcticonsMusicoletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
