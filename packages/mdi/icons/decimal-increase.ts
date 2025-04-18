import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDecimalIncreaseIcon],svg[mdi-decimal-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 17l-3 3v-2h-6v-2h6v-2zM9 5a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m7-2a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1M4 12a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiDecimalIncreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
