import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilMeetingBoardIcon],svg[uil-meeting-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 10h2a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2m14-6h-8V3a1 1 0 0 0-2 0v1H3a1 1 0 0 0-1 1v10a3 3 0 0 0 3 3h4.59l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3V21a1 1 0 0 0 2 0v-1.59l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L14.41 18H19a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1m-1 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h16ZM7 14h6a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2"></svg:path>`,
})
export class UilMeetingBoardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
