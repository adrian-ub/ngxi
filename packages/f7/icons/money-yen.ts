import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7MoneyYenIcon],svg[f7-money-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m41.47 12l-9.596 16.937h6.186v2.575h-7.454v3.625h7.454v2.576h-7.454v6.542h-4.765v-6.542h-7.453v-2.576h7.453v-3.625h-7.453v-2.575h6.186L15 12h5.333l7.847 14.634h.131L36.158 12z"></svg:path>`,
})
export class F7MoneyYenIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
