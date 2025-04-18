import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimClockFiveIcon],svg[uim-clock-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a1.003 1.003 0 0 1 1 1v4.73l1.6 2.77a1 1 0 1 1-1.73 1l-1.69-2.93A1 1 0 0 1 11 12V7a1.003 1.003 0 0 1 1-1"></svg:path><svg:path fill="currentColor" d="M2 12A10 10 0 1 0 12 2A10 10 0 0 0 2 12m9-5a1 1 0 0 1 2 0v4.73l1.6 2.77a1 1 0 1 1-1.73 1l-1.69-2.93A1 1 0 0 1 11 12Z" opacity=".5"></svg:path>`,
})
export class UimClockFiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
