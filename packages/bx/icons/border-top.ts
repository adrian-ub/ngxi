import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBorderTopIcon],svg[bx-border-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm0 12h2v2h-2zm-8 0h2v2h-2zm4 0h2v2h-2zm-8 0h2v2H7zm-4 0h2v2H3zm0-8h2v2H3zm0 4h2v2H3zm0-8h2v2H3zm4 4h2v2H7zm8 0h2v2h-2zm-4-4h2v2h-2zm0 8h2v2h-2zm0-4h2v2h-2zm10-8H3v2h18z"></svg:path>`,
})
export class BxBorderTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
