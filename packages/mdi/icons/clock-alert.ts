import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiClockAlertIcon],svg[mdi-clock-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12h2v6h-2zm0 8h2v2h-2zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c2.3 0 4.3-.8 6-2V10h3.8c-.9-4.6-5-8-9.8-8m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z"></svg:path>`,
})
export class MdiClockAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
