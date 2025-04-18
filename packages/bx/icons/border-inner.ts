import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBorderInnerIcon],svg[bx-border-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19h2v2h-2zM7 19h2v2H7zm8 0h2v2h-2zM3 19h2v2H3zm0-4h2v2H3zm0-8h2v2H3zm0-4h2v2H3zm12 0h2v2h-2zM7 3h2v2H7zm12 0h2v2h-2zm0 12h2v2h-2zm0-8h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M5 13h6v8h2v-8h8v-2h-8V3h-2v8H3v2h1.93z"></svg:path>`,
})
export class BxBorderInnerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
