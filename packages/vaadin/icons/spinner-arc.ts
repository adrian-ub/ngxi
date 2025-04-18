import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinSpinnerArcIcon],svg[vaadin-spinner-arc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8c0 3.9-3.1 7-7 7s-7-3-7-7H0c0 4 3.6 8 8 8s8-3.6 8-8z"></svg:path>`,
})
export class VaadinSpinnerArcIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
