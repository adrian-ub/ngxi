import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneChangeDateSortIcon],svg[icon-park-twotone-change-date-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTChangeDateSort0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M6 5v25.004h36V5"></svg:path><svg:path fill="#555" d="M15 23h4.002l13.85-14.143L28.993 5L15 19.143z"></svg:path><svg:path stroke-linecap="round" d="m30 37l-6 6l-6-6m6-7v13"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTChangeDateSort0)"></svg:path>`,
})
export class IconParkTwotoneChangeDateSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
