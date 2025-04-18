import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTextWrapIcon],svg[grommet-icons-text-wrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M17 10h7zM1 14h13V2H1zm5-8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m11 0h7zm0-4h7zm0 12h7zM0 18h24zm0 4h24zm14-8v-1l-4-5l-3 3l-1-1l-4 4z"></svg:path>`,
})
export class GrommetIconsTextWrapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
