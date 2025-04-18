import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSchedulePlayIcon],svg[grommet-icons-schedule-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M14 0v3M1 7h18M6 0v3m-2 8h2m2 0h8M4 15h2m2 0h6m-1 4H1V3h18v10m-1 10a5 5 0 1 0 0-10a5 5 0 0 0 0 10Zm-.5-6l1.5 1l-1.5 1z"></svg:path>`,
})
export class GrommetIconsSchedulePlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
