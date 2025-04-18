import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiSceneDynamicIcon],svg[cbi-scene-dynamic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21h-6c-.551 0-1-.45-1-1s.449-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1m5-4h-8c-.551 0-1-.45-1-1s.449-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m-3-4h-8c-.551 0-1-.45-1-1s.449-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m-3-9C9.372 4 4 9.373 4 16s5.372 12 12 12c6.627 0 12-5.373 12-12S22.627 4 16 4"></svg:path>`,
})
export class CbiSceneDynamicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
