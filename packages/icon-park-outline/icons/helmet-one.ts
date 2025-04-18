import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHelmetOneIcon],svg[icon-park-outline-helmet-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 11c-9.389 0-17 7.815-17 17.455V35h34v-6.546C41 18.815 33.389 11 24 11M4 35h40v6H4z"></svg:path><svg:path d="M21 6h6v18h-6z"></svg:path></svg:g>`,
})
export class IconParkOutlineHelmetOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
