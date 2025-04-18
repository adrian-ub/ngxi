import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinVolumeOffIcon],svg[vaadin-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5H0v6h4l5 4V1z"></svg:path>`,
})
export class VaadinVolumeOffIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
