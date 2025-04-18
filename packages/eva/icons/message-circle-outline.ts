import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaMessageCircleOutlineIcon],svg[eva-message-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="8" cy="12" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M19.07 4.93a10 10 0 0 0-16.28 11a1.06 1.06 0 0 1 .09.64L2 20.8a1 1 0 0 0 .27.91A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09a10 10 0 0 0 11-16.28Zm.83 8.36a8 8 0 0 1-11 6.08a3.3 3.3 0 0 0-1.25-.26a3.4 3.4 0 0 0-.56.05l-2.82.57l.57-2.82a3.1 3.1 0 0 0-.21-1.81a8 8 0 0 1 6.08-11a8 8 0 0 1 9.19 9.19"></svg:path>`,
})
export class EvaMessageCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
