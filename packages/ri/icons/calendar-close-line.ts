import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCalendarCloseLineIcon],svg[ri-calendar-close-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3V1H7v2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4V1h-2v2zm-5 7h16v9H4zm0-5h3v1h2V5h6v1h2V5h3v3H4zm5.879 5.964L12 13.086l2.121-2.122l1.415 1.415l-2.122 2.121l2.121 2.121l-1.414 1.414L12 15.915l-2.121 2.12l-1.415-1.414l2.122-2.12l-2.122-2.122z"></svg:path>`,
})
export class RiCalendarCloseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
