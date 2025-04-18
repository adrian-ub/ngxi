import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneFastForwardIcon],svg[ic-twotone-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9.86v4.28L18.03 12zm-9 0v4.28L9.03 12z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m4 18l8.5-6L4 6zm2-8.14L9.03 12L6 14.14zM21.5 12L13 6v12zM15 9.86L18.03 12L15 14.14z"></svg:path>`,
})
export class IcTwotoneFastForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
