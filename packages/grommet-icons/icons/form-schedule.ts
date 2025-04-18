import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsFormScheduleIcon],svg[grommet-icons-form-schedule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M6 19h12V8H6zm2-4h2zm3 0h5zm4-7V5zM9 8V5zm-3 3.5h12z"></svg:path>`,
})
export class GrommetIconsFormScheduleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
