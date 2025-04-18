import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNewspaperFillIcon],svg[ri-newspaper-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7h4v9a3 3 0 0 1-3 3m-1-10v7a1 1 0 1 0 2 0v-7zM5 6v6h6V6zm0 7v2h10v-2zm0 3v2h10v-2zm2-8h2v2H7z"></svg:path>`,
})
export class RiNewspaperFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
