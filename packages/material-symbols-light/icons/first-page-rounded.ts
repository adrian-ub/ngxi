import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFirstPageRoundedIcon],svg[material-symbols-light-first-page-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17.5q-.213 0-.357-.144T6.5 17V7q0-.213.144-.356t.357-.144t.356.144T7.5 7v10q0 .213-.144.356t-.357.144m6.109-5.5l4.246 4.246q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16l-4.388-4.389q-.131-.13-.184-.27q-.053-.138-.053-.297t.053-.296t.184-.267l4.388-4.389q.14-.14.345-.15q.203-.01.363.15t.16.354t-.16.354z"></svg:path>`,
})
export class MaterialSymbolsLightFirstPageRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
