import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrayAlertIcon],svg[mdi-tray-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12h2v5h16v-5h2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2m11-5h-2v2h2m0-10h-2v6h2Z"></svg:path>`,
})
export class MdiTrayAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
