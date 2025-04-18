import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPingPongIcon],svg[tabler-ping-pong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12.718 20.713a7.64 7.64 0 0 1-7.48-12.755l.72-.72a7.64 7.64 0 0 1 9.105-1.283L17.45 3.61a2.08 2.08 0 0 1 3.057 2.815l-.116.126l-2.346 2.387a7.64 7.64 0 0 1-1.052 8.864"></svg:path><svg:path d="M11 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0M9.3 5.3l9.4 9.4"></svg:path></svg:g>`,
})
export class TablerPingPongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
