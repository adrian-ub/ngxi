import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinPauseIcon],svg[vaadin-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h7v14H0zm9 0h7v14H9z"></svg:path>`,
})
export class VaadinPauseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
