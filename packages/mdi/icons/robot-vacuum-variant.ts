import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRobotVacuumVariantIcon],svg[mdi-robot-vacuum-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v2h2V5h14v2h2V5a2 2 0 0 0-2-2zm3 4v2h8V7zM3 9v3a9 9 0 0 0 9 9a9 9 0 0 0 9-9V9h-2v3a7 7 0 0 1-7 7a7 7 0 0 1-7-7V9zm9 3a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 12 17a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 12 12"></svg:path>`,
})
export class MdiRobotVacuumVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
