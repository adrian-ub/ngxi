import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesktopCursor16RegularIcon],svg[fluent-desktop-cursor-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v5.997a2 2 0 0 0 2 2h2.005v1.011H4.506a.5.5 0 0 0 0 1H8v-1h-.995v-1.01h.996v-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.973l.82.854c.116-.253.18-.534.18-.83V4a2 2 0 0 0-2-2zm5.864 6.153a.5.5 0 0 0-.86.347L9 14.502a.5.5 0 0 0 .906.292l1.37-1.908l2.4.559a.5.5 0 0 0 .473-.834z"></svg:path>`,
})
export class FluentDesktopCursor16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
