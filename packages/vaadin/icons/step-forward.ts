import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinStepForwardIcon],svg[vaadin-step-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1v14l10-7zm10 0h2v14h-2z"></svg:path>`,
})
export class VaadinStepForwardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
