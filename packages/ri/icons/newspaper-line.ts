import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNewspaperLineIcon],svg[ri-newspaper-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20V4H4v15a1 1 0 0 0 1 1zm3 2H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7h4v9a3 3 0 0 1-3 3m-1-10v7a1 1 0 1 0 2 0v-7zM6 6h6v6H6zm2 2v2h2V8zm-2 5h8v2H6zm0 3h8v2H6z"></svg:path>`,
})
export class RiNewspaperLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
