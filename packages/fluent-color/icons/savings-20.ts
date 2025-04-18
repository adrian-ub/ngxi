import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorSavings20Icon],svg[fluent-color-savings-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorSavings200)" d="M9.829 4.076c3.927 0 8.116 2.22 8.171 6.232c.027 1.955-1.214 4.08-1.855 4.65a4 4 0 0 1-.145.123v1.42a1.5 1.5 0 0 1-1.5 1.5h-1.384A1.12 1.12 0 0 1 12 16.883a.116.116 0 0 0-.116-.117h-1.768a.116.116 0 0 0-.116.117C10 17.5 9.5 18 8.884 18H7.5A1.5 1.5 0 0 1 6 16.5v-.538c-1.12-.65-2.041-1.719-2.557-2.9c-.075-.172-.21-.273-.335-.294A1.33 1.33 0 0 1 2 11.456V9.95c0-.63.455-1.168 1.076-1.272c.118-.02.249-.125.307-.303C3.81 7.077 4.813 6.102 6 5.476V3.162c0-.353.23-.603.48-.704s.581-.082.827.155c.696.67 1.526 1.358 2.522 1.463"></svg:path><svg:path fill="url(#fluentColorSavings201)" d="M7.5 8.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path><svg:path fill="#9F1459" d="M8.829 6.333a.957.957 0 0 1 1.25-.519l6.373 2.632a.957.957 0 0 1-.73 1.769L9.348 7.583a.957.957 0 0 1-.52-1.25"></svg:path><svg:path fill="url(#fluentColorSavings202)" d="M14.695 9.79A3.501 3.501 0 0 0 13.5 3a3.5 3.5 0 0 0-3.168 4.99z"></svg:path><svg:path fill="url(#fluentColorSavings203)" fill-opacity=".8" d="M14.695 9.79A3.501 3.501 0 0 0 13.5 3a3.5 3.5 0 0 0-3.168 4.99z"></svg:path><svg:defs><svg:radialgradient id="fluentColorSavings200" cx="0" cy="0" r="1" gradientTransform="matrix(4.15011 14.67205 -15.06763 4.262 6.9 3.933)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F08AF4"></svg:stop><svg:stop offset=".581" stop-color="#E869CE"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorSavings201" cx="0" cy="0" r="1" gradientTransform="rotate(59.532 -4.124 9.84)scale(1.27093)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B91D6B"></svg:stop><svg:stop offset="1" stop-color="#670938"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorSavings202" x1="15.785" x2="10.271" y1="9.214" y2="4.703" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF8A69"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorSavings203" x1="14.421" x2="11.962" y1="3.399" y2="9.08" gradientUnits="userSpaceOnUse"><svg:stop offset=".67" stop-color="#FB5937" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#CD3E1D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorSavings20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
