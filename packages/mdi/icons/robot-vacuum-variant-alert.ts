import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRobotVacuumVariantAlertIcon],svg[mdi-robot-vacuum-variant-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3c-1.1 0-2 .9-2 2v2h2V5h14v2h2V5c0-1.1-.9-2-2-2zm3 4v2h8V7zM1 9v3c0 5 4 9 9 9s9-4 9-9V9h-2v3c0 3.9-3.1 7-7 7s-7-3.1-7-7V9zm9 3c-1.4 0-2.5 1.1-2.5 2.5S8.6 17 10 17s2.5-1.1 2.5-2.5S11.4 12 10 12m11 0V7h2v6h-2m0 4v-2h2v2z"></svg:path>`,
})
export class MdiRobotVacuumVariantAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
