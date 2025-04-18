import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorGift16Icon],svg[fluent-color-gift-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorGift160)" d="M12 8.5V12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5z"></svg:path><svg:path fill="url(#fluentColorGift164)" d="M12 5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"></svg:path><svg:path fill="url(#fluentColorGift161)" d="M8 8.5V14H7V8.5z"></svg:path><svg:path fill="url(#fluentColorGift162)" d="M8 5v4H7V5z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M6 6a2 2 0 1 1 1.5-3.323A2 2 0 1 1 9 6zM5 4a1 1 0 0 1 2 0v1H6a1 1 0 0 1-1-1m3 1h1a1 1 0 1 0-1-1z" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorGift163)" fill-rule="evenodd" d="M6 6a2 2 0 1 1 1.5-3.323A2 2 0 1 1 9 6zM5 4a1 1 0 0 1 2 0v1H6a1 1 0 0 1-1-1m3 1h1a1 1 0 1 0-1-1z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorGift160" x1="6.926" x2="6.926" y1="16.161" y2="6.358" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#BB45EA"></svg:stop><svg:stop offset=".348" stop-color="#8B57ED"></svg:stop><svg:stop offset="1" stop-color="#5B2AB5"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorGift161" x1="7" x2="7" y1="5.406" y2="13.043" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FB5937"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorGift162" x1="7" x2="7" y1="-12.143" y2="15.857" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FB5937"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorGift163" x1="9.444" x2="7.401" y1="5.999" y2="-2.236" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorGift164" cx="0" cy="0" r="1" gradientTransform="matrix(14.1674 0 0 6.25 7.5 3.5)" gradientUnits="userSpaceOnUse"><svg:stop offset=".196" stop-color="#5B2AB5"></svg:stop><svg:stop offset=".763" stop-color="#8B57ED"></svg:stop><svg:stop offset="1" stop-color="#BB45EA"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorGift16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
