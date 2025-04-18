import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonUsageIncludedUseCaseIcon],svg[carbon-usage-included-use-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 28V5.828l7.586 7.586L22 12L12 2L2 12l1.414 1.414L11 5.83V28a2 2 0 0 0 2 2h15v-2z"></svg:path>`,
})
export class CarbonUsageIncludedUseCaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
