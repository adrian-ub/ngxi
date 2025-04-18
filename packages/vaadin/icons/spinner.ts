import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinSpinnerIcon],svg[vaadin-spinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.9.2l-.2 1C12.7 2 15 4.7 15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7c0-3.3 2.3-6 5.3-6.8l-.2-1C2.6 1.1 0 4.3 0 8c0 4.4 3.6 8 8 8s8-3.6 8-8c0-3.7-2.6-6.9-6.1-7.8"></svg:path>`,
})
export class VaadinSpinnerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
