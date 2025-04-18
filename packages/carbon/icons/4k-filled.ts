import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbon4kFilledIcon],svg[carbon-4k-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M14 21h-2v-4H8v-6h2v4h2v-4h2Zm10.19 0H22l-2.09-4.06l-.91 1.33V21h-2V11h2v4.39L22 11h2.19l-3 4.38Z"></svg:path>`,
})
export class Carbon4kFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
