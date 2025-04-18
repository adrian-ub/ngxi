import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteAlertIcon],svg[mdi-delete-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v2H3V4h3.5l1-1h5l1 1zM4 19V7h12v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2m15-4h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiDeleteAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
