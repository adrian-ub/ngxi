import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorGift20Icon],svg[fluent-color-gift-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorGift200)" d="M4 9h12v6.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 15.5z"></svg:path><svg:rect width="14" height="4" x="3" y="6" fill="url(#fluentColorGift204)" rx="1"></svg:rect><svg:path fill="#000" d="M9.25 18v-8h1.5v8z"></svg:path><svg:path fill="url(#fluentColorGift201)" d="M9.25 18v-8h1.5v8z"></svg:path><svg:path fill="#000" d="M10.75 5.75V10h-1.5V5.75z"></svg:path><svg:path fill="url(#fluentColorGift202)" d="M10.75 5.75V10h-1.5V5.75z"></svg:path><svg:path fill="url(#fluentColorGift203)" fill-rule="evenodd" d="m10 2.613l.056-.058a2.75 2.75 0 1 1 1.923 4.695a175 175 0 0 0-1.229-.001v.003L10 7.25l-.75.002v-.003H8.021A2.75 2.75 0 1 1 10 2.613m2.884 1.003a1.25 1.25 0 0 0-2.134.884v1.249h.052c.431-.001.931-.001 1.188.001a1.25 1.25 0 0 0 .894-2.134M9.25 4.5a1.25 1.25 0 1 0-1.24 1.25c.257-.002.757-.002 1.188-.002h.052z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorGift200" x1="9.234" x2="9.234" y1="21.537" y2="5.495" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#BB45EA"></svg:stop><svg:stop offset=".348" stop-color="#8B57ED"></svg:stop><svg:stop offset="1" stop-color="#5B2AB5"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorGift201" x1="9.25" x2="9.25" y1="5.5" y2="16.609" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FB5937"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorGift202" x1="9.25" x2="9.25" y1="-12.464" y2="17.286" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FB5937"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorGift203" x1="12.639" x2="9.794" y1="7.251" y2="-4.059" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorGift204" cx="0" cy="0" r="1" gradientTransform="matrix(18.0312 0 0 6.25 10 4.5)" gradientUnits="userSpaceOnUse"><svg:stop offset=".196" stop-color="#5B2AB5"></svg:stop><svg:stop offset=".763" stop-color="#8B57ED"></svg:stop><svg:stop offset="1" stop-color="#BB45EA"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorGift20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
