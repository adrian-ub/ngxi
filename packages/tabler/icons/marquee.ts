import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMarqueeIcon],svg[tabler-marquee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2m3 0h1.5m3 0H15m3 0a2 2 0 0 1 2 2m0 3v1.5m0 3V15m0 3a2 2 0 0 1-2 2m-3 0h-1.5m-3 0H9m-3 0a2 2 0 0 1-2-2m0-3v-1.5m0-3V9m0-3"></svg:path>`,
})
export class TablerMarqueeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
