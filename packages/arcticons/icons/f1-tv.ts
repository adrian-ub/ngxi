import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsF1TvIcon],svg[arcticons-f1-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.746 27.335h2.79m-1.369 4.001v-4.001m6.01 0l-1.369 4.001l-1.422-4.001" class="a"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.5 16.665h-5.922L27.189 27.96h5.922zm-5.922-.001h-20.79a7.03 7.03 0 0 0-4.95 2.033L3.5 27.96h5.922l6.568-6.513a3.52 3.52 0 0 1 2.475-1.017H34.78"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.422 27.96h5.923l3.357-3.33a1.5 1.5 0 0 1 1.06-.435h11.223"></svg:path>`,
})
export class ArcticonsF1TvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
