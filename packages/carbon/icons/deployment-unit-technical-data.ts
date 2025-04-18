import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDeploymentUnitTechnicalDataIcon],svg[carbon-deployment-unit-technical-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 23h-4V9h4a4.005 4.005 0 0 1 4 4v6a4.004 4.004 0 0 1-4 4m-2-2h2a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2zM7 11h3v12h2V11h3V9H7z"></svg:path>`,
})
export class CarbonDeploymentUnitTechnicalDataIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
