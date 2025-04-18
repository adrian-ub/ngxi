import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinForwardIcon],svg[vaadin-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v14l8-7zm8 0v14l8-7z"></svg:path>`,
})
export class VaadinForwardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
