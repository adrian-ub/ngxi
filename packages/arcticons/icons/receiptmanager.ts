import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsReceiptmanagerIcon],svg[arcticons-receiptmanager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.7 14.4h10.7v2.7H18.7zm0 6.1h10.7v2.7H18.7zm14.1-6.1h2.6v2.7h-2.6zm0 6.1h2.6v2.7h-2.6z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.6 5.3v27.5H6.5V39c0 1.8 2 4.5 4.1 4.5h26a5.19 5.19 0 0 0 4.9-4.9V5.3l-2.3 2.4l-3-3.2l-3.1 3.2l-3-3.2L27 7.7l-3-3.2l-3 3.2l-3.1-3.2l-3.1 3.2Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.6 32.8h2.6V10.6h23.7v27.3c0 3.9-5.4 4.1-5.4 0v-5.1z"></svg:path>`,
})
export class ArcticonsReceiptmanagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
