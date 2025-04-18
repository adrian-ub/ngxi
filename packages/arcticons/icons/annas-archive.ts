import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAnnasArchiveIcon],svg[arcticons-annas-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.753 5.565L42.5 42.398l-11.303.037l-1.915-7.252H18.718l-1.915 7.252L5.5 42.398L17.247 5.565z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.376 27.27L24 14.588L20.624 27.27z"></svg:path>`,
})
export class ArcticonsAnnasArchiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
