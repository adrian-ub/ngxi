import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorGauge32Icon],svg[fluent-color-gauge-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorGauge320)" d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14s14-6.268 14-14S23.732 2 16 2"></svg:path><svg:path fill="url(#fluentColorGauge324)" d="M22.962 21.869a1 1 0 0 0 1.344-.3a10.01 10.01 0 0 0 .3-10.665a1 1 0 1 0-1.72 1.021a8.01 8.01 0 0 1-.24 8.528a1 1 0 0 0 .316 1.416m-14.424.163a1 1 0 0 1-.83-.44A10 10 0 0 1 17.948 6.19a1 1 0 1 1-.387 1.962A8.008 8.008 0 0 0 8 16a7.96 7.96 0 0 0 1.366 4.473a1 1 0 0 1-.828 1.559"></svg:path><svg:path fill="url(#fluentColorGauge321)" d="M22.962 21.869a1 1 0 0 0 1.344-.3a10.01 10.01 0 0 0 .3-10.665a1 1 0 1 0-1.72 1.021a8.01 8.01 0 0 1-.24 8.528a1 1 0 0 0 .316 1.416m-14.424.163a1 1 0 0 1-.83-.44A10 10 0 0 1 17.948 6.19a1 1 0 1 1-.387 1.962A8.008 8.008 0 0 0 8 16a7.96 7.96 0 0 0 1.366 4.473a1 1 0 0 1-.828 1.559"></svg:path><svg:path fill="url(#fluentColorGauge322)" d="M22.962 21.869a1 1 0 0 0 1.344-.3a10.01 10.01 0 0 0 .3-10.665a1 1 0 1 0-1.72 1.021a8.01 8.01 0 0 1-.24 8.528a1 1 0 0 0 .316 1.416m-14.424.163a1 1 0 0 1-.83-.44A10 10 0 0 1 17.948 6.19a1 1 0 1 1-.387 1.962A8.008 8.008 0 0 0 8 16a7.96 7.96 0 0 0 1.366 4.473a1 1 0 0 1-.828 1.559"></svg:path><svg:path fill="url(#fluentColorGauge323)" d="M21.518 7.876a.82.82 0 0 0-.526.177l-1.056.842c-.638.507-1.494 1.192-2.368 1.9s-1.77 1.437-2.485 2.037c-.357.3-.673.568-.92.786a7 7 0 0 0-.563.538a2.463 2.463 0 0 0 3.745 3.2a7 7 0 0 0 .443-.64c.176-.278.393-.632.632-1.032c.48-.8 1.061-1.798 1.623-2.773s1.108-1.927 1.508-2.636l.484-.853l.182-.322a.82.82 0 0 0-.7-1.224"></svg:path><svg:defs><svg:lineargradient id="fluentColorGauge320" x1="12" x2="22.728" y1="2" y2="28.491" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F4F4F4"></svg:stop><svg:stop offset="1" stop-color="#CBCBCB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorGauge321" x1="11.5" x2="8.212" y1="18.5" y2="21.486" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#42B870" stop-opacity="0"></svg:stop><svg:stop offset=".716" stop-color="#42B870"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorGauge322" x1="20.799" x2="23.767" y1="18.275" y2="21.467" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E82C41" stop-opacity="0"></svg:stop><svg:stop offset=".563" stop-color="#E82C41"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorGauge323" x1="13.01" x2="19.541" y1="7.875" y2="16.71" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorGauge324" cx="0" cy="0" r="1" gradientTransform="matrix(21.6009 0 0 30.1382 5.598 21.995)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#42B870"></svg:stop><svg:stop offset=".493" stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#E82C41"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorGauge32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
