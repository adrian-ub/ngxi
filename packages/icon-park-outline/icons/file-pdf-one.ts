import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFilePdfOneIcon],svg[icon-park-outline-file-pdf-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 38v6h28v-6m0-18v-6L30 4H10v16"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 4v10h10"></svg:path><svg:rect width="40" height="18" x="4" y="20" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M21 25v8m-11-8v8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 33v-8h5m-5 5h5m-27-5h3.5a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5H10m11-5h2a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4h-2"></svg:path><svg:path stroke-linecap="round" d="M16 12h4"></svg:path></svg:g>`,
})
export class IconParkOutlineFilePdfOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
