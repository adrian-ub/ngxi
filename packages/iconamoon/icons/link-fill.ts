import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonLinkFillIcon],svg[iconamoon-link-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 9a3 3 0 1 0 0 6h3a1 1 0 1 1 0 2H6A5 5 0 0 1 6 7h3a1 1 0 0 1 0 2zm1 3a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m8-5a1 1 0 1 0 0 2h3a3 3 0 1 1 0 6h-3a1 1 0 1 0 0 2h3a5 5 0 0 0 0-10z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonLinkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
