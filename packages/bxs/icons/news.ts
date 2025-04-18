import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsNewsIcon],svg[bxs-news-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13a2 2 0 0 0 2 2h15c1.654 0 3-1.346 3-3V7h-2zM12 7h3v2h-3zm0 4h3v2h-3zM5 7h5v6H5zm0 10v-2h10v2z"></svg:path>`,
})
export class BxsNewsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
