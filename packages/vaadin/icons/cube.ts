import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCubeIcon],svg[vaadin-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0L0 2v10l8 4l8-4V2zm6.4 2.6L8.5 4.8L1.9 2.6L8 1zM1 11.4V3.3l7 2.4v9.2z"></svg:path>`,
})
export class VaadinCubeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
