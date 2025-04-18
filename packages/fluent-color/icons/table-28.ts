import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorTable28Icon],svg[fluent-color-table-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="22" height="22" x="3" y="3" fill="url(#fluentColorTable280)" rx="5"></svg:rect><svg:path fill="url(#fluentColorTable281)" d="M3 6.75A3.75 3.75 0 0 1 6.75 3H9.5v6.5H3zM3 11v6h6.5v-6zm0 7.5v2.75A3.75 3.75 0 0 0 6.75 25H9.5v-6.5zm8 6.5h6v-6.5h-6zm7.5 0h2.75A3.75 3.75 0 0 0 25 21.25V18.5h-6.5zm6.5-8v-6h-6.5v6zm0-7.5V6.75A3.75 3.75 0 0 0 21.25 3H18.5v6.5zM17 3h-6v6.5h6zm0 8v6h-6v-6z"></svg:path><svg:defs><svg:lineargradient id="fluentColorTable280" x1="4.571" x2="23.429" y1="4.571" y2="23.429" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B0F098"></svg:stop><svg:stop offset="1" stop-color="#98F0B0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorTable281" x1="3" x2="25" y1="3" y2="25" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#42B870"></svg:stop><svg:stop offset="1" stop-color="#1A7F7C"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorTable28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
