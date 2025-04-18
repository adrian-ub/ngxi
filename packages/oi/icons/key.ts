import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiKeyIcon],svg[oi-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 0A2.5 2.5 0 0 0 3 2.5c0 .16 0 .32.03.47L0 6v2h3V6h2V5l.03-.03c.15.03.31.03.47.03a2.5 2.5 0 0 0 0-5M6 1c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class OiKeyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
