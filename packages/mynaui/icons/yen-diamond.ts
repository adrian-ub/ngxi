import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiYenDiamondIcon],svg[mynaui-yen-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0zM15.182 12.5H12m0 0H8.818m3.182 0l-3.5-5m3.5 5l3.5-5m-3.5 5V15m3.182 0H12m0 0H8.818M12 15v2.5"></svg:path>`,
})
export class MynauiYenDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
