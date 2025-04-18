import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineChangeDateSortIcon],svg[icon-park-outline-change-date-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M6 5v25.004h36V5"></svg:path><svg:path d="M15 23h4.002l13.85-14.143L28.993 5L15 19.143z"></svg:path><svg:path stroke-linecap="round" d="m30 37l-6 6l-6-6m6-7v13"></svg:path></svg:g>`,
})
export class IconParkOutlineChangeDateSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
