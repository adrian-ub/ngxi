import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxNoSignalIcon],svg[bx-no-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16h2v5H3zm4-3h2v8H7zM21 3h-2v14.59l-2-2V7h-2v6.59l-2-2V10h-1.59l-7.7-7.71l-1.42 1.42l18 18l1.42-1.42l-.71-.7zm-6 18h1.88L15 19.12zm-4 0h2v-3.88l-2-2z"></svg:path>`,
})
export class BxNoSignalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
