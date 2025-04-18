import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDecimalCommaDecreaseIcon],svg[mdi-decimal-comma-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13v3H4l-1-3a1 1 0 0 1 2 0m10 3v-2l-3 3l3 3v-2h6v-2m-9-5a3 3 0 0 1-6 0V8a3 3 0 0 1 6 0m-2 0a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0Z"></svg:path>`,
})
export class MdiDecimalCommaDecreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
