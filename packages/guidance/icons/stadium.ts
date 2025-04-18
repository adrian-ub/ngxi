import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceStadiumIcon],svg[guidance-stadium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 3.5c-2.663 0-5.323-.189-7.96-.566L1 2.5H.5v19H1l3.04-.434A56 56 0 0 1 12 20.5m0-17c2.663 0 5.323-.189 7.96-.566L23 2.5h.5v19H23l-3.04-.434A56 56 0 0 0 12 20.5m0-17V9m0 11.5V15M.5 7.5H1a4.5 4.5 0 0 1 0 9H.5m23 0H23a4.5 4.5 0 1 1 0-9h.5M12 9a3 3 0 1 1 0 6m0-6a3 3 0 1 0 0 6"></svg:path>`,
})
export class GuidanceStadiumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
