import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCalendar1Icon],svg[tdesign-calendar-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1v3h8V1h2v3h4v18H2V4h4V1zM4 6v3h16V6zm16 5H4v9h16zM7 13h2.004v2.004H7zm4 0h2.004v2.004H11zm4 0h2.004v2.004H15zm-8 3h2.004v2.004H7zm4 0h2.004v2.004H11zm4 0h2.004v2.004H15z"></svg:path>`,
})
export class TdesignCalendar1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
