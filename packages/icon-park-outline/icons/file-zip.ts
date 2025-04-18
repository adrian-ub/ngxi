import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFileZipIcon],svg[icon-park-outline-file-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 38v6h28v-6m0-18v-6L30 4H10v16"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 4v10h10"></svg:path><svg:path stroke-linecap="round" d="M16 12h4"></svg:path><svg:rect width="40" height="18" x="4" y="20" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 25h6l-6 8h6"></svg:path><svg:path stroke-linecap="round" d="M24 25v8m7-8v8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31 25h3.5a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5H31"></svg:path></svg:g>`,
})
export class IconParkOutlineFileZipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
