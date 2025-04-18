import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDeployRulesIcon],svg[carbon-deploy-rules-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 4l-6 6l1.41 1.41L17 7.83V20h2V7.83l3.59 3.58L24 10zM8 18h7v2H8zm0 4h16v2H8zm0 4h16v2H8z"></svg:path>`,
})
export class CarbonDeployRulesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
