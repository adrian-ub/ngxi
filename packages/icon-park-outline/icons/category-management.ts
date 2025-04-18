import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCategoryManagementIcon],svg[icon-park-outline-category-management-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="36" height="14" x="6" y="28" stroke="currentColor" stroke-width="4" rx="4"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M20 7H10a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10"></svg:path><svg:circle cx="34" cy="14" r="8" stroke="currentColor" stroke-width="4"></svg:circle><svg:circle cx="34" cy="14" r="3" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkOutlineCategoryManagementIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
