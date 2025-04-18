import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDeploymentUnitTechnicalInstallationIcon],svg[carbon-deployment-unit-technical-installation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11h3v10h-3v2h8v-2h-3V11h3V9h-8zM7 11h3v12h2V11h3V9H7z"></svg:path>`,
})
export class CarbonDeploymentUnitTechnicalInstallationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
