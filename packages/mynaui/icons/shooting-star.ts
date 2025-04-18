import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiShootingStarIcon],svg[mynaui-shooting-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5.647L9.353 3m.53 6.882L4.058 4.06M5.647 12L3 9.353m5.294 5.294l4.235-2.118l2.118-4.235l2.118 4.235L21 14.647l-4.235 2.118L14.647 21l-2.118-4.235z"></svg:path>`,
})
export class MynauiShootingStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
