import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDeployIcon],svg[carbon-deploy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 2l-6 6l1.415 1.402L22 5.818V28H6V12H4v16a2.003 2.003 0 0 0 2 2h16a2.003 2.003 0 0 0 2-2V5.815l3.586 3.587L29 8Z"></svg:path><svg:path fill="currentColor" d="M16 24h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4-6v4h4v-4Z"></svg:path>`,
})
export class CarbonDeployIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
