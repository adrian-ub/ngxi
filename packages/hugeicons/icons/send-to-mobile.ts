import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSendToMobileIcon],svg[hugeicons-send-to-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.002 6c-.087-1.42-.325-2.323-.979-2.975C14.994 2 13.339 2 10.027 2S5.059 2 4.03 3.025S3.002 5.7 3.002 9v6c0 3.3 0 4.95 1.029 5.975S6.715 22 10.027 22s4.967 0 5.996-1.025c.654-.652.892-1.556.979-2.975m-7 1h.009m8.461-10.014l2.251 2.207c.298.318.388 1.159.098 1.449l-2.349 2.344m-7.474-2.943h9.343" color="currentColor"></svg:path>`,
})
export class HugeiconsSendToMobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
