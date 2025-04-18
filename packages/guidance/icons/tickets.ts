import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceTicketsIcon],svg[guidance-tickets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M17.5 4.23V8m0 2v4m0 2v3.77M.5 3.5v6a2.5 2.5 0 0 1 0 5v6H1l3.04-.434a56.3 56.3 0 0 1 15.92 0L23 20.5h.5v-6a2.5 2.5 0 0 1 0-5v-6H23l-3.04.434a56.3 56.3 0 0 1-15.92 0L1 3.5z"></svg:path>`,
})
export class GuidanceTicketsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
