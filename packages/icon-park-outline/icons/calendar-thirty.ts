import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCalendarThirtyIcon],svg[icon-park-outline-calendar-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="40" x="4" y="4" rx="2"></svg:rect><svg:path d="M4 14h40M4 11v12m40-12v12"></svg:path><svg:path d="M28 22v14h8V22z" clip-rule="evenodd"></svg:path><svg:path d="M12 22h8v14h-8m8-7h-6"></svg:path></svg:g>`,
})
export class IconParkOutlineCalendarThirtyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
