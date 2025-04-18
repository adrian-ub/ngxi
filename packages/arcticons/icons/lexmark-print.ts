import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLexmarkPrintIcon],svg[arcticons-lexmark-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.959 5.5h9.904m8.281 5.672H24.36L18.959 5.5H8.066v33.219l3.511 3.781h25.837l2.52-3.781V14.232zm2.79 3.06H8.066m31.868 9.363H8.066"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.066 33.948h10.217l3.129 3.128h18.522m-20.03-20.188h10.083v3.601H19.904z"></svg:path>`,
})
export class ArcticonsLexmarkPrintIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
