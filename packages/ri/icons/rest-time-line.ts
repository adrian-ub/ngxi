import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRestTimeLineIcon],svg[ri-rest-time-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6v2a6 6 0 1 0 5.996 6.225L17 14h2a8 8 0 1 1-16 0c0-4.335 3.58-8 8-8m10-4v2l-5.327 6H21v2h-8v-2l5.326-6H13V2z"></svg:path>`,
})
export class RiRestTimeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
