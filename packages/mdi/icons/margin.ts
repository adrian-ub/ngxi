import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMarginIcon],svg[mdi-margin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4v5l-1.5-1.5l-13 13l-2-2l13-13L15 4zm-3 16a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3m0-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M7 12a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3m0-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiMarginIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
