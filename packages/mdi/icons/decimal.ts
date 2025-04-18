import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDecimalIcon],svg[mdi-decimal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3m1 6a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0m6-3a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3m1 6a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0M6 15a1 1 0 1 1-1-1a1 1 0 0 1 1 1"></svg:path>`,
})
export class MdiDecimalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
