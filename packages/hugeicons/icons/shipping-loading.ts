import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShippingLoadingIcon],svg[hugeicons-shipping-loading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 9.878V6h14v3.878c0 2.886 0 4.329-.911 5.225c-.911.897-2.378.897-5.311.897h-1.556c-2.933 0-4.4 0-5.31-.897C4 14.207 4 12.763 4 9.878M4 6l.673-1.538c.522-1.194.783-1.79 1.312-2.126C6.515 2 7.193 2 8.55 2h4.9c1.357 0 2.036 0 2.565.336s.79.932 1.312 2.126L18 6M9.5 9h3M3 16h15a3 3 0 1 1 0 6H3m14-3h.009M11 19h.009M5 19h.009" color="currentColor"></svg:path>`,
})
export class HugeiconsShippingLoadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
