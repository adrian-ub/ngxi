import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wiLightningIcon],svg[wi-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.96 24.51h.39l6.88-10.18q.135-.27-.15-.27h-2.84l2.99-5.45c.09-.18.02-.27-.2-.27h-3.81c-.11 0-.2.06-.29.18l-2.78 7.4c-.02.18.04.27.19.27h2.75zm8.5-6.33h.27l5.22-7.67c.05-.08.06-.15.04-.2s-.08-.07-.17-.07h-2.1l2.18-4.03q.18-.3-.18-.3h-2.74c-.13 0-.23.06-.3.19l-2.08 5.48c-.03.09-.03.16.01.21s.1.07.19.07h2.04z"></svg:path>`,
})
export class WiLightningIcon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}
