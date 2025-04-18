import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemRegulationFilledIcon],svg[tdesign-system-regulation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2H1v16h22zM7 10V6h2v4zm4-2V6h2v2zm6 2h-2V6h2zm-6 4V9h2v5zm-2 0H7v-3h2zm6 0v-3h2v3zm6 6H3v2h18z"></svg:path>`,
})
export class TdesignSystemRegulationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
