import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignShop4FilledIcon],svg[tdesign-shop-4-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7h1v2h-1v11h1v2h-5.5v-5.5a4.5 4.5 0 1 0-9 0V22H2v-2h1V9H2V7h1V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4zM7 4a2 2 0 0 0-2 2v1h3V4zm3 0v3h4V4zm6 0v3h3V6a2 2 0 0 0-2-2z"></svg:path><svg:path fill="currentColor" d="M12 14a2.5 2.5 0 0 0-2.5 2.5V22h5v-5.5A2.5 2.5 0 0 0 12 14"></svg:path>`,
})
export class TdesignShop4FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
