import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBroadcastIcon],svg[picon-broadcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h2l2 5H5V6H3v2H1m4-4H3v1h2M4 0l1 1l-1 1l-1-1M2 0q-4 1 0 3q-2-2 0-3m4 0q4 1 0 3q2-2 0-3"></svg:path>`,
})
export class PiconBroadcastIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
