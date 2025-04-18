import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMarqueeOffIcon],svg[tabler-marquee-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6c0-.556.227-1.059.593-1.421M9 4h1.5m3 0H15m3 0a2 2 0 0 1 2 2m0 3v1.5m0 3V15m-.598 4.426A2 2 0 0 1 18 20m-3 0h-1.5m-3 0H9m-3 0a2 2 0 0 1-2-2m0-3v-1.5m0-3V9M3 3l18 18"></svg:path>`,
})
export class TablerMarqueeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
