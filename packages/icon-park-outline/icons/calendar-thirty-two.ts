import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCalendarThirtyTwoIcon],svg[icon-park-outline-calendar-thirty-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 8h40v36H4z"></svg:path><svg:path stroke-linecap="round" d="M28 20v14h8V20z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M17 4v8m14-8v8m-19 8h8v14h-8m8-7h-6"></svg:path></svg:g>`,
})
export class IconParkOutlineCalendarThirtyTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
