import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsBarcodeIcon],svg[ls-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 644h25V50H0zm75 0h49V50H75zm98 0h50V50h-50zm99 0h100V50H272zm149 0h75V50h-75zm124 0h50V50h-50zm99 0h25V50h-25zm75 0h49V50h-49z"></svg:path>`,
})
export class LsBarcodeIcon {
  readonly viewBox = input("0 0 768 644")
  readonly width = input("1.2em")
  readonly height = input("1em")
}
