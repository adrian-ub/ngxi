import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGateAlertIcon],svg[mdi-gate-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17h-2v2h2zm0-8h-2v6h2zm-4 4v-2h-2V6h-2v5h-2V6H9v5H7V7H5v4H3V9H1v12h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v-2h-2v-4zM5 17H3v-4h2zm4 0H7v-4h2zm4 0h-2v-4h2z"></svg:path>`,
})
export class MdiGateAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
