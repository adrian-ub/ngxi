import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHandshakeStudentIcon],svg[arcticons-handshake-student-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.2 4.5l-6.5 39h7.8l1.803-10.819l7.548-6.292L24 43.5h7.8l6.5-39h-7.8l-2.35 14.09l-7.548 6.291L24 4.5z"></svg:path>`,
})
export class ArcticonsHandshakeStudentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
