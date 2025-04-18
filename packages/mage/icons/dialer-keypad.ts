import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDialerKeypadIcon],svg[mage-dialer-keypad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.926a1.088 1.088 0 1 0 0-2.176a1.088 1.088 0 0 0 0 2.176m5.441 0a1.088 1.088 0 1 0 0-2.176a1.088 1.088 0 0 0 0 2.176m-10.882 0a1.088 1.088 0 1 0 0-2.176a1.088 1.088 0 0 0 0 2.176M12 10.368a1.088 1.088 0 1 0 0-2.177a1.088 1.088 0 0 0 0 2.177m5.441 0a1.088 1.088 0 1 0 0-2.177a1.088 1.088 0 0 0 0 2.177m-10.882 0a1.088 1.088 0 1 0 0-2.177a1.088 1.088 0 0 0 0 2.177M12 15.809a1.088 1.088 0 1 0 0-2.177a1.088 1.088 0 0 0 0 2.177m0 5.441a1.088 1.088 0 1 0 0-2.176a1.088 1.088 0 0 0 0 2.176m5.441-5.441a1.088 1.088 0 1 0 0-2.177a1.088 1.088 0 0 0 0 2.177m-10.882 0a1.088 1.088 0 1 0 0-2.177a1.088 1.088 0 0 0 0 2.177"></svg:path>`,
})
export class MageDialerKeypadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
