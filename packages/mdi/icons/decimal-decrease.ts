import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDecimalDecreaseIcon],svg[mdi-decimal-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 17l3 3v-2h6v-2h-6v-2zM9 5a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m-5 5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiDecimalDecreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
