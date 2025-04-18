import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiWarningIcon],svg[oi-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.09 0c-.06 0-.1.04-.13.09L.02 6.9c-.02.05-.03.13-.03.19v.81c0 .05.04.09.09.09h6.81c.05 0 .09-.04.09-.09v-.81c0-.05-.01-.14-.03-.19L4.01.09A.14.14 0 0 0 3.88 0h-.81zM3 3h1v2H3zm0 3h1v1H3z"></svg:path>`,
})
export class OiWarningIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
