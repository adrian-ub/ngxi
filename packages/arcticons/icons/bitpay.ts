import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBitpayIcon],svg[arcticons-bitpay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.144 25.97a7.01 7.01 0 0 1 6.624-5.63h0a4.595 4.595 0 0 1 4.638 5.63l-.645 3.66a7.01 7.01 0 0 1-6.624 5.632h0a4.595 4.595 0 0 1-4.638-5.631m-.993 5.631l3.972-22.524"></svg:path>`,
})
export class ArcticonsBitpayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
