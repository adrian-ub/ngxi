import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChipIcon],svg[carbon-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11v10h10V11Zm8 8h-6v-6h6Z"></svg:path><svg:path fill="currentColor" d="M30 13v-2h-4V8a2 2 0 0 0-2-2h-3V2h-2v4h-6V2h-2v4H8a2 2 0 0 0-2 2v3H2v2h4v6H2v2h4v3a2 2 0 0 0 2 2h3v4h2v-4h6v4h2v-4h3a2 2 0 0 0 2-2v-3h4v-2h-4v-6Zm-6 11H8V8h16Z"></svg:path>`,
})
export class CarbonChipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
