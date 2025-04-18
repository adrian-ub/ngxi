import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsImdbIcon],svg[arcticons-imdb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.038 24.925a2.74 2.74 0 0 1 2.731-2.73h0a2.74 2.74 0 0 1 2.731 2.73v1.776a2.74 2.74 0 0 1-2.73 2.73h0a2.74 2.74 0 0 1-2.732-2.73m0 2.73V18.508M24.5 29.424V18.501h1.776c3.004 0 5.462 2.457 5.462 5.461h0c0 3.004-2.458 5.462-5.462 5.462zm-13.422.007V18.508l5.462 10.923l5.462-10.923v10.923M8.5 18.508v10.923"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 35.5v-23a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4v23a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4"></svg:path>`,
})
export class ArcticonsImdbIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
