import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneNewspaperFoldingIcon],svg[icon-park-twotone-newspaper-folding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTNewspaperFolding0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m22 44l-1-8"></svg:path><svg:path fill="#555" d="M42 44V12H26l1 8l1 8l1 8l-7 8z"></svg:path><svg:path d="M28 28h5m-6-8h6"></svg:path><svg:path fill="#555" d="M6 4h19l1 8l1 8l1 8l1 8H6z"></svg:path><svg:path d="M12 12h7m-7 8h8m-8 8h9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTNewspaperFolding0)"></svg:path>`,
})
export class IconParkTwotoneNewspaperFoldingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
