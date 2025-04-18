import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLockAlertOutlineIcon],svg[mdi-lock-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 17c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m6 3V10H4v10zm0-12c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h1V6c0-2.8 2.2-5 5-5s5 2.2 5 5v2zm-6-5C8.3 3 7 4.3 7 6v2h6V6c0-1.7-1.3-3-3-3m12 4h-2v6h2zm0 8h-2v2h2z"></svg:path>`,
})
export class MdiLockAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
