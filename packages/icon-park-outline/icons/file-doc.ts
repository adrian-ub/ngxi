import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFileDocIcon],svg[icon-park-outline-file-doc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 38v6h28v-6m0-18v-6L30 4H10v16"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 4v10h10"></svg:path><svg:path stroke-linecap="round" d="M16 12h4"></svg:path><svg:rect width="40" height="18" x="4" y="20" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M10 25v8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 25h2a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4h-2"></svg:path><svg:ellipse cx="24" cy="29" stroke-linecap="round" stroke-linejoin="round" rx="3" ry="4"></svg:ellipse><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 25h-2a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h2"></svg:path></svg:g>`,
})
export class IconParkOutlineFileDocIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
