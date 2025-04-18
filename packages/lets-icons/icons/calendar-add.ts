import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCalendarAddIcon],svg[lets-icons-calendar-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="18" height="15" x="3" y="6" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M4 11h16m-10 5h4m-2-2v4M8 3v4m8-4v4"></svg:path></svg:g>`,
})
export class LetsIconsCalendarAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
