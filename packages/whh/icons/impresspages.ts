import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhImpresspagesIcon],svg[whh-impresspages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.63 384q-80 0-136-56t-56-135.5t56-136t136-56.5t136 56.5t56 136t-56 135.5t-136 56m-320 320l-192-192l192-192l192 192zm-319.5-320q-79.5 0-136-56T.63 192.5t56-136t136-56.5t136 56.5t56 136t-56 135.5t-135.5 56m0 256q79.5 0 135.5 56.5t56 136t-56 135.5t-135.5 56t-136-56T.63 832.5t56.5-136t136-56.5m639.5 0q80 0 136 56.5t56 136t-56 135.5t-136 56t-136-56t-56-136t56-136t136-56"></svg:path>`,
})
export class WhhImpresspagesIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
