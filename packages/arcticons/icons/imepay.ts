import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsImepayIcon],svg[arcticons-imepay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.366 20.24l2.96 2.854a.53.53 0 0 0 .833-.12l7.09-12.668L16.163 14a.53.53 0 0 0-.251.896l3.964 3.874l7.677-5.107l-7.677 5.107zl-2.364 1.93a.415.415 0 0 1-.678-.322v-4.573m16.429 14.499v3.713a2.75 2.75 0 0 1-2.75 2.75h0c-.76 0-1.447-.308-1.945-.806"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.753 27.237v4.537a2.75 2.75 0 0 1-2.75 2.75h0a2.75 2.75 0 0 1-2.75-2.75v-4.537m-2.503 4.537a2.75 2.75 0 0 1-2.75 2.75h0a2.75 2.75 0 0 1-2.75-2.75v-1.787a2.75 2.75 0 0 1 2.75-2.75h0a2.75 2.75 0 0 1 2.75 2.75m0 4.537v-7.287m-13.503 4.537a2.75 2.75 0 0 0 2.75 2.75h0a2.75 2.75 0 0 0 2.75-2.75v-1.787a2.75 2.75 0 0 0-2.75-2.75h0a2.75 2.75 0 0 0-2.75 2.75m0-2.75v11"></svg:path>`,
})
export class ArcticonsImepayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
