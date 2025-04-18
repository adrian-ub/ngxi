import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiYenCircleIcon],svg[mynaui-yen-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-5.818.5H12m0 0H8.818m3.182 0l-3.5-5m3.5 5l3.5-5m-3.5 5V15m3.182 0H12m0 0H8.818M12 15v2.5"></svg:path>`,
})
export class MynauiYenCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
