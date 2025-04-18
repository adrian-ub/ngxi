import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsArccreateIcon],svg[arcticons-arccreate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.31 29.375v-10.75L24 13.25l-9.31 5.375v10.75L24 34.75zl9.31 5.375L24 45.5L5.38 34.75v-21.5L24 2.5l18.62 10.75l-9.31 5.375"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.69 40.125V7.875l-4.655 2.688v26.874"></svg:path>`,
})
export class ArcticonsArccreateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
