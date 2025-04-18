import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsViewListIcon],svg[majesticons-view-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4zm1 2a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2H5zm5 0a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9zm-5 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H5zm5 0a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2h-9zm-5 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H5zm5 0a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2h-9z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsViewListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
