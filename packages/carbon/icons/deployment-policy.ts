import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDeploymentPolicyIcon],svg[carbon-deployment-policy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16v-2h7.171l-2.293-2.293l1.414-1.414L30 15l-4.708 4.707l-1.414-1.414L26.171 16zm-2-4h-2V5.828l-2.293 2.293l-1.414-1.414L16 2l4.707 4.707l-1.414 1.414L17 5.828zm0 8.101V18a4.005 4.005 0 0 0-4-4H5.828l2.293-2.293l-1.414-1.414L2 15l4.707 4.707l1.414-1.414L5.828 16H13a2.003 2.003 0 0 1 2 2v2.101a5 5 0 1 0 2 0M16 28a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"></svg:path>`,
})
export class CarbonDeploymentPolicyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
