import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggViewListIcon],svg[gg-view-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm2 2H5a1 1 0 0 0-1 1v1h3zm2 0v2h11V8a1 1 0 0 0-1-1zm-2 4H4v2h3zm2 2v-2h11v2zm-2 2H4v1a1 1 0 0 0 1 1h2zm2 2v-2h11v1a1 1 0 0 1-1 1z" clip-rule="evenodd"></svg:path>`,
})
export class GgViewListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
