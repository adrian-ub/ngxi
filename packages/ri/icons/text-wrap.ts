import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTextWrapIcon],svg[ri-text-wrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18h1.5a2.5 2.5 0 0 0 0-5H3v-2h13.5a4.5 4.5 0 1 1 0 9H15v2l-4-3l4-3zM3 4h18v2H3zm6 14v2H3v-2z"></svg:path>`,
})
export class RiTextWrapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
