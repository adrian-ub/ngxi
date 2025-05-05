import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconNewspaperIcon],svg[picon-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6H4v1h3m0-3H3v1h4m0-4H6v2h1M5 1H3v2h2M2 7V0h6v7L7 8H1L0 7V1h2L1 2v5"></svg:path>`,
})
export class PiconNewspaperIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
