import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKiteIcon],svg[arcticons-kite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m43.5 37.145l-26.732.072C10.639 32.721 4.5 28.214 4.5 23.851c.01-4.373 6.15-8.828 12.299-13.068H43.5c-6.324 4.373-12.647 8.746-12.647 13.14S37.176 32.73 43.5 37.145m-26.62.072l14.239-14.885"></svg:path>`,
})
export class ArcticonsKiteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
