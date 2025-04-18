import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedOxenIcon],svg[token-branded-oxen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#12C6BA" fill-rule="evenodd" d="M12 12L3 4.2h18zm0 0l-9 7.8h18z" clip-rule="evenodd"></svg:path>`,
})
export class TokenBrandedOxenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
