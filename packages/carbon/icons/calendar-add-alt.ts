import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCalendarAddAltIcon],svg[carbon-calendar-add-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 21h-3v-3h-2v3h-3v2h3v3h2v-3h3z"></svg:path><svg:path fill="currentColor" d="M22 30c-4.4 0-8-3.6-8-8s3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8m0-14c-3.3 0-6 2.7-6 6s2.7 6 6 6s6-2.7 6-6s-2.7-6-6-6"></svg:path><svg:path fill="currentColor" d="M28 6c0-1.1-.9-2-2-2h-4V2h-2v2h-8V2h-2v2H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h6v-2H6V6h4v2h2V6h8v2h2V6h4v6h2z"></svg:path>`,
})
export class CarbonCalendarAddAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
