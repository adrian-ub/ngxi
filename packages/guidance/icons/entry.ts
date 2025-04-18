import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceEntryIcon],svg[guidance-entry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M17 12H1m10.5-5c0 .577.665 1.562 1.228 2.294a7.5 7.5 0 0 0 1.745 1.662C15.2 11.445 16.2 12 16.99 12c-.79 0-1.79.556-2.517 1.044a7.5 7.5 0 0 0-1.745 1.662c-.563.732-1.228 1.717-1.228 2.294m-3-10V2.5h.329A46 46 0 0 0 21.897.605L22.25.5h.25v23h-.25l-.353-.105A46 46 0 0 0 8.829 21.5H8.5V17"></svg:path>`,
})
export class GuidanceEntryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
