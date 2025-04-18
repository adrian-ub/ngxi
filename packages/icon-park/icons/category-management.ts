import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCategoryManagementIcon],svg[icon-park-category-management-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="36" height="14" x="6" y="28" stroke="#000" stroke-width="4" rx="4"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M20 7H10C7.79086 7 6 8.79086 6 11V17C6 19.2091 7.79086 21 10 21H20"></svg:path><svg:circle cx="34" cy="14" r="8" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:circle cx="34" cy="14" r="3" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkCategoryManagementIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
