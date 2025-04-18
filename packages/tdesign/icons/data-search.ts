import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDataSearchIcon],svg[tdesign-data-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v11H4v7h9v2H2zm2 9h16V4H4zm1.998-4.5h2.004v2.004H5.998zM17.75 16a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M14 17.75a3.75 3.75 0 1 1 7.013 1.849l1.651 1.651l-1.414 1.414l-1.651-1.65A3.75 3.75 0 0 1 14 17.75M5.998 15.5h2.004v2.004H5.998z"></svg:path>`,
})
export class TdesignDataSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
