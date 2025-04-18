import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconAzureDevopsIcon],svg[codicon-azure-devops-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3.622v8.512L11.5 15l-5.425-1.975v1.957l-3.071-4.01l8.951.698V4.006zm-2.984.428L6.994 1v2.001L2.383 4.356L1 6.13v4.029l1.978.874V5.868z"></svg:path>`,
})
export class CodiconAzureDevopsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
