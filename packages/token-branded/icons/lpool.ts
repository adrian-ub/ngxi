import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLpoolIcon],svg[token-branded-lpool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedLpool0)" d="M15.524 16.897L7.402 8.671l.9-1.602l7.888 8.105z"></svg:path><svg:path fill="url(#tokenBrandedLpool1)" d="M7.95 7.05c.122 0 .239.004.36.013l-.707 1.805a3.15 3.15 0 1 0 3.488 3.375l.054-.135V12a4.927 4.927 0 1 1 4.374 4.896l.67-1.72l-.044-.026a3.15 3.15 0 1 0-3.24-3.303l-.005.018V12a4.95 4.95 0 1 1-4.95-4.95"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedLpool0" x1="5.701" x2="11.456" y1="8.683" y2="20.326" gradientUnits="userSpaceOnUse"><svg:stop offset=".18" stop-color="#FAA31C"></svg:stop><svg:stop offset=".49" stop-color="#312D2E"></svg:stop><svg:stop offset=".89" stop-color="#FE4C38"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedLpool1" x1="3.927" x2="20.217" y1="13.678" y2="11.973" gradientUnits="userSpaceOnUse"><svg:stop offset=".12" stop-color="#F9C213"></svg:stop><svg:stop offset=".79" stop-color="#FF443B"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedLpoolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
