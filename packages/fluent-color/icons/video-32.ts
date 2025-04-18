import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorVideo32Icon],svg[fluent-color-video-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorVideo320)" d="m14.75 16l11.724-8.072C27.967 6.9 30 7.968 30 9.78v12.438c0 1.812-2.033 2.881-3.526 1.853z"></svg:path><svg:path fill="url(#fluentColorVideo322)" fill-opacity=".75" d="m14.75 16l11.724-8.072C27.967 6.9 30 7.968 30 9.78v12.438c0 1.812-2.033 2.881-3.526 1.853z"></svg:path><svg:path fill="url(#fluentColorVideo321)" d="M2 10.5A4.5 4.5 0 0 1 6.5 6h10a4.5 4.5 0 0 1 4.5 4.5v11a4.5 4.5 0 0 1-4.5 4.5h-10A4.5 4.5 0 0 1 2 21.5z"></svg:path><svg:path fill="url(#fluentColorVideo323)" d="M4 20.5A3.5 3.5 0 0 1 7.5 17h8a3.5 3.5 0 1 1 0 7h-8A3.5 3.5 0 0 1 4 20.5" opacity=".5"></svg:path><svg:path fill="#BABAFF" fill-rule="evenodd" d="M7.5 19a1.5 1.5 0 0 0 0 3h4a1.5 1.5 0 0 0 0-3zm8 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" clip-rule="evenodd"></svg:path><svg:defs><svg:radialgradient id="fluentColorVideo320" cx="0" cy="0" r="1" gradientTransform="matrix(7.30128 22.12922 -43.89198 14.48164 22.699 5.234)" gradientUnits="userSpaceOnUse"><svg:stop offset=".081" stop-color="#F08AF4"></svg:stop><svg:stop offset=".394" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#4E44DB"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorVideo321" cx="0" cy="0" r="1" gradientTransform="matrix(21.8603 21.1668 -44.45245 45.90887 -1.454 6.833)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F08AF4"></svg:stop><svg:stop offset=".341" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#4E44DB"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorVideo322" x1="18.399" x2="29.985" y1="16" y2="15.584" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#312A9A"></svg:stop><svg:stop offset="1" stop-color="#312A9A" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorVideo323" x1="3.659" x2="6.14" y1="17" y2="26.294" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3B148A"></svg:stop><svg:stop offset="1" stop-color="#4B20A0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorVideo32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
