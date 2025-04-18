import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDeploymentUnitExecutionIcon],svg[carbon-deployment-unit-execution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11V9h-8v14h8v-2h-6v-4h5v-2h-5v-4z"></svg:path>`,
})
export class CarbonDeploymentUnitExecutionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
