import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherCalendarIcon],svg[feather-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="4" rx="2" ry="2"></svg:rect><svg:path d="M16 2v4M8 2v4m-5 4h18"></svg:path></svg:g>`,
})
export class FeatherCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
