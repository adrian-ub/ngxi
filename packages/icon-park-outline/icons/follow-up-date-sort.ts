import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFollowUpDateSortIcon],svg[icon-park-outline-follow-up-date-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 5v25.004h36V5M30 37l-6 6l-6-6m6-7v13"></svg:path><svg:path stroke-linejoin="round" d="M27.989 10.979L33 16l-5.011 5.09"></svg:path><svg:path d="M15 16.001h18"></svg:path></svg:g>`,
})
export class IconParkOutlineFollowUpDateSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
