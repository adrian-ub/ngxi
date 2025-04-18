import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAmplifierIcon],svg[mdi-amplifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4a1 1 0 0 1 1 1h6v18h-2a1 1 0 0 1-1 1a1 1 0 0 1-1-1H7a1 1 0 0 1-1 1a1 1 0 0 1-1-1H3V3h6a1 1 0 0 1 1-1M5 5v4h14V5zm2 1a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m5 0h2v1h-2zm3 0h1v2h-1zm2 0h1v2h-1zm-5 5a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m-2-5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiAmplifierIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
