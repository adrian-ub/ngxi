import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCalendarThirtyTwoIcon],svg[icon-park-twotone-calendar-thirty-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCalendarThirtyTwo0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M4 8h40v36H4z"></svg:path><svg:path stroke-linecap="round" d="M28 20v14h8V20z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M17 4v8m14-8v8m-19 8h8v14h-8m8-7h-6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCalendarThirtyTwo0)"></svg:path>`,
})
export class IconParkTwotoneCalendarThirtyTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
