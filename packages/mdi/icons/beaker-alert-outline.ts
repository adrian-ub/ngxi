import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBeakerAlertOutlineIcon],svg[mdi-beaker-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v2c-1.1 0-2 .9-2 2v12c0 1.11-.89 2-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2zm4 2v2h5v1H7v1h3v1H7v1h3v1H7v1h5v1H7v1h3v1H7v3h10V5zm14 8V7h2v6zm0 4v-2h2v2z"></svg:path>`,
})
export class MdiBeakerAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
