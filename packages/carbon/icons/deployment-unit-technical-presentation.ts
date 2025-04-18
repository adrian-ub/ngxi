import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDeploymentUnitTechnicalPresentationIcon],svg[carbon-deployment-unit-technical-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 23h-2V9h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4zm0-7h4v-5.001h-4zM7 11h3v12h2V11h3V9H7z"></svg:path>`,
})
export class CarbonDeploymentUnitTechnicalPresentationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
