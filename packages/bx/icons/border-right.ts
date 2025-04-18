import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBorderRightIcon],svg[bx-border-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 19h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2H7zm-4 0h2v2H3zM3 7h2v2H3zm0 8h2v2H3zm0-4h2v2H3zm0-8h2v2H3zm12 0h2v2h-2zm-4 0h2v2h-2zM7 3h2v2H7zm4 4h2v2h-2zm0 8h2v2h-2zm-4-4h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2zm8-6v16h2V3h-2z"></svg:path>`,
})
export class BxBorderRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
