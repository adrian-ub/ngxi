import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinTabAIcon],svg[vaadin-tab-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10H0V6h9V4l5 4l-5 4zm5-6h2v8h-2z"></svg:path>`,
})
export class VaadinTabAIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
