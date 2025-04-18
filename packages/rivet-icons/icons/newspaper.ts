import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsNewspaperIcon],svg[rivet-icons-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 5h4v2H8zm4 3H8v2h4z"></svg:path><svg:path d="M16 1H4v2H0v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3zM5.83 13c.11-.313.17-.65.17-1V3h8v9a1 1 0 0 1-1 1zM2 12V5h2v7a1 1 0 1 1-2 0"></svg:path></svg:g>`,
})
export class RivetIconsNewspaperIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
