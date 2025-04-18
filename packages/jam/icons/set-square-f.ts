import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamSetSquareFIcon],svg[jam-set-square-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 20v-1a1 1 0 0 0-2 0v1h-2v-1a1 1 0 0 0-2 0v1H6v-1a1 1 0 0 0-2 0v1H2a2 2 0 0 1-2-2V2.061A2 2 0 0 1 3.413.646l15.97 15.938A2 2 0 0 1 17.972 20zM4 9.414V15a1 1 0 0 0 1 1h5.586a1 1 0 0 0 .707-1.707L5.707 8.707A1 1 0 0 0 4 9.414"></svg:path>`,
})
export class JamSetSquareFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
