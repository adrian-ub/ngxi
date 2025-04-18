import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRestoreAlertIcon],svg[mdi-restore-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3c-5 0-9 4-9 9H1l3.9 3.9l.1.1l4-4H6c0-3.9 3.1-7 7-7s7 3.1 7 7s-3.1 7-7 7c-1.9 0-3.7-.8-4.9-2.1l-1.4 1.4C8.3 20 10.5 21 13 21c5 0 9-4 9-9s-4-9-9-9m-1 12h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiRestoreAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
