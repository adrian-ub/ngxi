import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDecimalCommaIncreaseIcon],svg[mdi-decimal-comma-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0V8a3 3 0 0 0-3-3m1 6a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0m6 6a3 3 0 0 0 3-3V8a3 3 0 0 0-6 0v3a3 3 0 0 0 3 3m-1-6a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0m4 9v-2h-6v-2h6v-2l3 3M5 13v3H4l-1-3a1 1 0 0 1 2 0"></svg:path>`,
})
export class MdiDecimalCommaIncreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
