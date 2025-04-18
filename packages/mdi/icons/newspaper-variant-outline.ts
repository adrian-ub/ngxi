import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNewspaperVariantOutlineIcon],svg[mdi-newspaper-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5v14H4V5zm0-2H4c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m-2 12H6v2h12zm-8-8H6v6h4zm2 2h6V7h-6zm6 2h-6v2h6z"></svg:path>`,
})
export class MdiNewspaperVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
