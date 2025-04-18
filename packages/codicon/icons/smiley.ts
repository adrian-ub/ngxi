import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconSmileyIcon],svg[codicon-smiley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.111 2.18a7 7 0 1 1 7.778 11.64A7 7 0 0 1 4.11 2.18zm.556 10.809a6 6 0 1 0 6.666-9.978a6 6 0 0 0-6.666 9.978M6.5 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0m5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M8 11a3 3 0 0 1-2.65-1.58l-.87.48a4 4 0 0 0 7.12-.16l-.9-.43A3 3 0 0 1 8 11" clip-rule="evenodd"></svg:path>`,
})
export class CodiconSmileyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
