import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesktop16RegularIcon],svg[fluent-desktop-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v5.997a2 2 0 0 0 2 2h2.005v1.011H4.506a.5.5 0 0 0 0 1h6.996a.5.5 0 1 0 0-1h-1.5v-1.01H12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm5.003 9.997v1.011H7.005v-1.01zM3 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.997a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></svg:path>`,
})
export class FluentDesktop16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
