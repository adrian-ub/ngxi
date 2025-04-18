import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemRegulationIcon],svg[tdesign-system-regulation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h22v17H1zm2 2v13h18V3zm6 2v5H7V5zm4 0v3h-2V5zm4 0v5h-2V5zm-4 4v5h-2V9zm-4 2v3H7v-3zm8 0v3h-2v-3zM3.222 21h17.556v2H3.222z"></svg:path>`,
})
export class TdesignSystemRegulationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
