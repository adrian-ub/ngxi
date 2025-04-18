import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCenterFocusStrongIcon],svg[tdesign-center-focus-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h7v2H4v5H2zm13 0h7v7h-2V4h-5zm-3 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-4 3v5h5v2H2v-7zm18 0v7h-7v-2h5v-5z"></svg:path>`,
})
export class TdesignCenterFocusStrongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
