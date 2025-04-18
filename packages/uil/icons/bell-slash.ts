import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBellSlashIcon],svg[uil-bell-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.07 6.12A3.5 3.5 0 0 1 12 6a4 4 0 0 1 4 4v1.34a1 1 0 0 0 2 0V10a6 6 0 0 0-5-5.91V3a1 1 0 0 0-2 0v1.1l-.45.08a1 1 0 0 0 .52 1.94m10.64 14.17l-18-18a1 1 0 0 0-1.42 1.42l4.12 4.11A6 6 0 0 0 6 10v3.18A3 3 0 0 0 4 16v2a1 1 0 0 0 1 1h3.14a4 4 0 0 0 7.72 0h1.73l2.7 2.71a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M8 10a3.3 3.3 0 0 1 0-.55L11.59 13H8Zm4 10a2 2 0 0 1-1.72-1h3.44A2 2 0 0 1 12 20m-6-3v-1a1 1 0 0 1 1-1h6.59l2 2Z"></svg:path>`,
})
export class UilBellSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
