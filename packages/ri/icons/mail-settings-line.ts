import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMailSettingsLineIcon],svg[ri-mail-settings-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v9h-2zM19.501 5H4.511l7.55 6.662zM17.05 19.549a3 3 0 0 1 0-1.098l-1.014-.585l1-1.732l1.014.586c.278-.238.599-.425.95-.55V15h2v1.17c.351.125.672.312.95.55l1.014-.586l1 1.732l-1.014.585a3 3 0 0 1 0 1.098l1.014.585l-1 1.732l-1.014-.586a3 3 0 0 1-.95.55V23h-2v-1.17a3 3 0 0 1-.95-.55l-1.014.586l-1-1.732zM20 20a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiMailSettingsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
