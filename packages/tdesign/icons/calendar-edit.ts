import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCalendarEditIcon],svg[tdesign-calendar-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1v3h8V1h2v3h4v2.001h.001l-.001 6L20 12v-1H4v9h8v2H2V4h4V1zM4 9h16V6H4zm15.287 4.086l4.127 4.127l-5.286 5.287H14v-4.128zm-.672 3.5l1.299 1.3l.672-.673l-1.3-1.299zm-.115 2.713L17.2 18L16 19.2v1.3h1.3z"></svg:path>`,
})
export class TdesignCalendarEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
