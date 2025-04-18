import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGiftIcon],svg[meteor-icons-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22V7q-2-5-5-5a1 1 0 0 0 0 5m5 0q2-5 5-5a1 1 0 0 1 0 5m5 0v5H2V7ZM4 12v10h16V12"></svg:path>`,
})
export class MeteorIconsGiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
