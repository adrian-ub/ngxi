import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCountdateIcon],svg[arcticons-countdate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.096 26.575l-3.5 1.925m0 0v-14m-3.417 1.225c-1.05-.875-1.925-1.225-4.2-1.225h-.525c-2.45 0-4.55 2.1-4.55 4.55h0c0 2.45 2.1 4.55 4.55 4.55h4.725v4.9h-9.275m18.279 8.742V43m-22.366-5.758V43"></svg:path><svg:rect width="35.641" height="35.641" x="6.179" y="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsCountdateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
