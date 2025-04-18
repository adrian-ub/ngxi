import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorGauge24Icon],svg[fluent-color-gauge-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorGauge240)" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path fill="url(#fluentColorGauge244)" d="M7.934 16.066a.75.75 0 1 1-1.06 1.06a7.25 7.25 0 0 1 6.798-12.181a.75.75 0 1 1-.344 1.46a5.75 5.75 0 0 0-5.393 9.661m9.954-6.924a.75.75 0 0 1 .955.46a7.25 7.25 0 0 1-1.716 7.525a.75.75 0 1 1-1.061-1.061a5.75 5.75 0 0 0 1.362-5.969a.75.75 0 0 1 .46-.955"></svg:path><svg:path fill="url(#fluentColorGauge241)" d="M7.934 16.066a.75.75 0 1 1-1.06 1.06a7.25 7.25 0 0 1 6.798-12.181a.75.75 0 1 1-.344 1.46a5.75 5.75 0 0 0-5.393 9.661m9.954-6.924a.75.75 0 0 1 .955.46a7.25 7.25 0 0 1-1.716 7.525a.75.75 0 1 1-1.061-1.061a5.75 5.75 0 0 0 1.362-5.969a.75.75 0 0 1 .46-.955"></svg:path><svg:path fill="url(#fluentColorGauge242)" d="M7.934 16.066a.75.75 0 1 1-1.06 1.06a7.25 7.25 0 0 1 6.798-12.181a.75.75 0 1 1-.344 1.46a5.75 5.75 0 0 0-5.393 9.661m9.954-6.924a.75.75 0 0 1 .955.46a7.25 7.25 0 0 1-1.716 7.525a.75.75 0 1 1-1.061-1.061a5.75 5.75 0 0 0 1.362-5.969a.75.75 0 0 1 .46-.955"></svg:path><svg:path fill="url(#fluentColorGauge243)" d="M15.88 6.667a.625.625 0 0 1 .961.761l-.129.25a425 425 0 0 1-1.416 2.713c-.4.758-.814 1.534-1.156 2.157c-.171.31-.326.586-.452.803a5 5 0 0 1-.319.5a1.875 1.875 0 0 1-2.941-2.327c.086-.109.244-.265.413-.425c.182-.173.414-.387.678-.625c.527-.476 1.188-1.058 1.833-1.62a370 370 0 0 1 2.314-2.003z"></svg:path><svg:defs><svg:lineargradient id="fluentColorGauge240" x1="9.143" x2="16.805" y1="2" y2="20.922" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F4F4F4"></svg:stop><svg:stop offset="1" stop-color="#CBCBCB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorGauge241" x1="8.5" x2="6.179" y1="14" y2="16.715" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#42B870" stop-opacity="0"></svg:stop><svg:stop offset=".58" stop-color="#42B870"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorGauge242" x1="15.48" x2="17.818" y1="14.395" y2="16.714" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E82C41" stop-opacity="0"></svg:stop><svg:stop offset=".563" stop-color="#E82C41"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorGauge243" x1="10.023" x2="15.173" y1="6.517" y2="13.14" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorGauge244" cx="0" cy="0" r="1" gradientTransform="matrix(15.6599 0 0 23.6791 4.46 17.317)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#42B870"></svg:stop><svg:stop offset=".501" stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#E82C41"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorGauge24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
