import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsClanguageIcon],svg[arcticons-clanguage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M29.388 27.264a6.406 6.406 0 1 1 .116-6.745"></svg:path><svg:path d="M33.728 30.388a11.896 11.896 0 1 1 .216-12.524m-4.44 2.656l4.44-2.656m-.216 12.524l-4.34-3.124"></svg:path><svg:path d="M24 3.5L5.92 13.336v20.816L24 44.5l18.08-10.275V13.163z"></svg:path></svg:g>`,
})
export class ArcticonsClanguageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
