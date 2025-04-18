import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSchedulesIcon],svg[grommet-icons-schedules-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M17 7h6v16H7v-4m16-8h-6M13 0v3M1 7h16M1 3h16v16H1zm4-3v3m-1 8h2m2 0h6M4 15h2m2 0h6"></svg:path>`,
})
export class GrommetIconsSchedulesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
