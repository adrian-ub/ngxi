import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7BarcodeIcon],svg[f7-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.242 46h3.82V10h-3.82Zm7.524 0h2.203V10h-2.203Zm5.836 0h6.234V10h-6.234Zm8.53 0h3.962V10h-3.961Zm6.329 0h6.188V10H33.46Zm8.086 0h4.852V10h-4.852Zm6.07 0h3.14V10h-3.14Z"></svg:path>`,
})
export class F7BarcodeIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
