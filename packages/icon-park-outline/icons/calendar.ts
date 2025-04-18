import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCalendarIcon],svg[icon-park-outline-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 19h38v21a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM5 9a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v10H5z"></svg:path><svg:path stroke-linecap="round" d="M16 4v8m16-8v8m-4 22h6m-20 0h6m8-8h6m-20 0h6"></svg:path></svg:g>`,
})
export class IconParkOutlineCalendarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
