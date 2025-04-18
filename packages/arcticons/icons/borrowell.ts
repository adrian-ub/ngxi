import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBorrowellIcon],svg[arcticons-borrowell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.433 17.933c0 7.419-6.014 13.433-13.433 13.433s-13.433-6.014-13.433-13.433V4.5H24c7.419 0 13.433 6.014 13.433 13.433"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.433 30.067C37.433 37.486 31.419 43.5 24 43.5H10.567V30.067c0-7.419 6.014-13.433 13.433-13.433s13.433 6.014 13.433 13.433"></svg:path>`,
})
export class ArcticonsBorrowellIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
