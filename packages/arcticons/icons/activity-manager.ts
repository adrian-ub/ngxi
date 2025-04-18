import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsActivityManagerIcon],svg[arcticons-activity-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5h15.857v15.857H5.5zm19.07 7.928l10-10l10 10l-10 10zM5.5 26.643h15.857V42.5H5.5zm21.143 0H42.5V42.5H26.643z"></svg:path>`,
})
export class ArcticonsActivityManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
