import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorVideo24Icon],svg[fluent-color-video-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorVideo240)" d="m11 12l8.255-5.704c1.161-.802 2.745.03 2.745 1.44v8.528c0 1.41-1.584 2.242-2.745 1.44z"></svg:path><svg:path fill="url(#fluentColorVideo242)" fill-opacity=".75" d="m11 12l8.255-5.704c1.161-.802 2.745.03 2.745 1.44v8.528c0 1.41-1.584 2.242-2.745 1.44z"></svg:path><svg:path fill="url(#fluentColorVideo241)" d="M2 8.25A3.25 3.25 0 0 1 5.25 5h6.5A3.25 3.25 0 0 1 15 8.25v7.5A3.25 3.25 0 0 1 11.75 19h-6.5A3.25 3.25 0 0 1 2 15.75z"></svg:path><svg:path fill="url(#fluentColorVideo243)" d="M4 15a2 2 0 0 1 2-2h5a2 2 0 1 1 0 4H6a2 2 0 0 1-2-2" opacity=".5"></svg:path><svg:path fill="#BABAFF" d="M6 14a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm5 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:defs><svg:radialgradient id="fluentColorVideo240" cx="0" cy="0" r="1" gradientTransform="matrix(5 18.50003 -31.06105 8.39487 17 3)" gradientUnits="userSpaceOnUse"><svg:stop offset=".081" stop-color="#F08AF4"></svg:stop><svg:stop offset=".394" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#4E44DB"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorVideo241" cx="0" cy="0" r="1" gradientTransform="rotate(44.73 -6.966 2.35)scale(21.0535 44.2355)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F08AF4"></svg:stop><svg:stop offset=".341" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#4E44DB"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorVideo242" x1="14.056" x2="21.993" y1="12" y2="11.767" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#312A9A"></svg:stop><svg:stop offset="1" stop-color="#312A9A" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorVideo243" x1="3.796" x2="5.154" y1="13" y2="18.344" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3B148A"></svg:stop><svg:stop offset="1" stop-color="#4B20A0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorVideo24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
