import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronCircleUpLeftFIcon],svg[jam-chevron-circle-up-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9h5a1 1 0 0 0 0-2H8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0zm1 11C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamChevronCircleUpLeftFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
