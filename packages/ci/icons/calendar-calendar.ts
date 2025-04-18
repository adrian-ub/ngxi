import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCalendarCalendarIcon],svg[ci-calendar-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.999 22h-14a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V2h2v2h6V2h2v2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2Zm-14-12v10h14V10h-14Zm0-4v2h14V6h-14Z"></svg:path>`,
})
export class CiCalendarCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
