import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinMagnetIcon],svg[vaadin-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 0h5v4h-5zm0 5v3c0 1.6-1.4 3-3 3S5 9.6 5 8V5H0v3c0 4.4 3.6 8 8 8s8-3.6 8-8V5zM0 0h5v4H0z"></svg:path>`,
})
export class VaadinMagnetIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
