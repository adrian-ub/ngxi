import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesktop16FilledIcon],svg[fluent-desktop-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.501 2a1.5 1.5 0 0 0-1.5 1.5v6.997a1.5 1.5 0 0 0 1.5 1.5h2.5V13H4.495a.5.5 0 0 0 0 1H11.5a.5.5 0 1 0 0-1H10v-1.003h2.501a1.5 1.5 0 0 0 1.5-1.5V3.5a1.5 1.5 0 0 0-1.5-1.5zm5.5 9.997V13H7v-1.003z"></svg:path>`,
})
export class FluentDesktop16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
