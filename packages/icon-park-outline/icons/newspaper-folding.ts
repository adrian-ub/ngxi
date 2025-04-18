import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineNewspaperFoldingIcon],svg[icon-park-outline-newspaper-folding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m22 44l-1-8m21 8V12H26l1 8l1 8l1 8l-7 8zM28 28h5m-6-8h6"></svg:path><svg:path d="M6 4h19l1 8l1 8l1 8l1 8H6zm6 8h7m-7 8h8m-8 8h9"></svg:path></svg:g>`,
})
export class IconParkOutlineNewspaperFoldingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
