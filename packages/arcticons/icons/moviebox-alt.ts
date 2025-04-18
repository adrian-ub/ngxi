import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMovieboxAltIcon],svg[arcticons-moviebox-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.993 9.009c-7.815 0-6.885 33.491-19.458 33.491S1.83 5.5 9.17 5.5s13.078 22.966 23.285 22.966S44.894 9.01 38.993 9.01z"></svg:path>`,
})
export class ArcticonsMovieboxAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
