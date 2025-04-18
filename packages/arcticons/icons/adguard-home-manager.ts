import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdguardHomeManagerIcon],svg[arcticons-adguard-home-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.128 18.213l-7.513 3.095v7.63c0 4.088 8.385 7.993 8.385 7.993s8.385-3.905 8.385-7.993v-7.63l-7.513-3.095a2.27 2.27 0 0 0-1.744 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.735 27.044l2.897 2.877l4.66-5.987"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.973 20.704L25.945 6.409a2.92 2.92 0 0 0-3.89 0L6.027 20.704c-1.074.958-.396 2.737 1.044 2.737h2.05v16.617a2.275 2.275 0 0 0 2.275 2.274h25.208a2.275 2.275 0 0 0 2.275-2.274V23.44h2.05c1.44 0 2.118-1.779 1.044-2.737Z"></svg:path>`,
})
export class ArcticonsAdguardHomeManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
