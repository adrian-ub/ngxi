import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiClockAlertOutlineIcon],svg[mdi-clock-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7v6l5.2 3.1l.8-1.2l-4.5-2.7V7zm9 5v6h2v-6zm0 8v2h2v-2zm-2 0c-1.7 1.3-3.7 2-6 2c-5.5 0-10-4.5-10-10S6.5 2 12 2c4.8 0 8.9 3.4 9.8 8h-2.1c-.9-3.4-4-6-7.7-6c-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.5-1.1 6-2.7z"></svg:path>`,
})
export class MdiClockAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
