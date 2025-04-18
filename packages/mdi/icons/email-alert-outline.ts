import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEmailAlertOutlineIcon],svg[mdi-email-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 7h-2v6h2zm0 8h-2v2h2zm-4-9c0-1.1-.9-2-2-2H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H2V8l8 5l8-5z"></svg:path>`,
})
export class MdiEmailAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
