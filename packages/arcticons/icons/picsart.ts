import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPicsartIcon],svg[arcticons-picsart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5A14.1 14.1 0 0 0 9.9 18.6a14.1 14.1 0 0 0 24.07 9.97a14.1 14.1 0 0 0 0-19.94A14.27 14.27 0 0 0 24 4.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.932 12.29a6.28 6.28 0 1 0 4.44 1.84a6.36 6.36 0 0 0-4.44-1.84m-6.28 18.884v8.45a3.876 3.876 0 0 1-3.876 3.876h0A3.876 3.876 0 0 1 9.9 39.624V18.6"></svg:path>`,
})
export class ArcticonsPicsartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
