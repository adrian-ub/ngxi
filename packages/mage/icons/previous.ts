import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[magePreviousIcon],svg[mage-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.889 3.7v16.6m16.222-1.676V5.38a1.455 1.455 0 0 0-2.343-1.15L8.6 11.363a1.456 1.456 0 0 0 .087 2.357l9.169 6.113a1.456 1.456 0 0 0 2.255-1.208"></svg:path>`,
})
export class MagePreviousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
