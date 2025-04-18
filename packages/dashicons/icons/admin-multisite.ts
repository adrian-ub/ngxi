import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsAdminMultisiteIcon],svg[dashicons-admin-multisite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.27 6.87L10 3.14L5.73 6.87L5 6.14l5-4.38l5 4.38zM14 8.42l-4.05 3.43L6 8.38v-.74l4-3.5l4 3.5zM11 9.7V8H9v1.7zm-1.73 4.03L5 10L.73 13.73L0 13l5-4.38L10 13zm10 0L15 10l-4.27 3.73L10 13l5-4.38L20 13zM5 11l4 3.5V18H1v-3.5zm10 0l4 3.5V18h-8v-3.5zm-9 6v-2H4v2zm10 0v-2h-2v2z"></svg:path>`,
})
export class DashiconsAdminMultisiteIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
