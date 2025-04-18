import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinStepBackwardIcon],svg[vaadin-step-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15V1L4 8zM2 1h2v14H2z"></svg:path>`,
})
export class VaadinStepBackwardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
