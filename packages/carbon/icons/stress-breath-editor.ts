import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonStressBreathEditorIcon],svg[carbon-stress-breath-editor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7z" fill="currentColor"></svg:path><svg:path d="M30 30h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5h-2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z" fill="currentColor"></svg:path><svg:path d="M11 8H5a3 3 0 0 1-3-3V3h2v2a1 1 0 0 0 1 1h6z" fill="currentColor"></svg:path><svg:path d="M4 15H2v-2a3 3 0 0 1 3-3h6v2H5a1 1 0 0 0-1 1z" fill="currentColor"></svg:path>`,
})
export class CarbonStressBreathEditorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
