import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFileTxtOneIcon],svg[icon-park-outline-file-txt-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M10 38v6h28v-6m0-18v-6L30 4H10v16"></svg:path><svg:path stroke-linejoin="round" d="M28 4v10h10"></svg:path><svg:path d="M16 12h4"></svg:path><svg:rect width="40" height="18" x="4" y="20" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linejoin="round" d="m21 25l6 8m0-8l-6 8m-8-8v8m-3-8h6m19 0v8m-3-8h6"></svg:path></svg:g>`,
})
export class IconParkOutlineFileTxtOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
