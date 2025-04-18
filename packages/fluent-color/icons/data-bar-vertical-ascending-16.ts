import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDataBarVerticalAscending16Icon],svg[fluent-color-data-bar-vertical-ascending-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDataBarVerticalAscending160)" d="M14 3.683C14 2.753 13.328 2 12.5 2S11 2.754 11 3.683v8.634c0 .93.672 1.683 1.5 1.683s1.5-.754 1.5-1.683z"></svg:path><svg:path fill="url(#fluentColorDataBarVerticalAscending161)" d="M10.003 6.5a1.5 1.5 0 0 0-3 0v6a1.5 1.5 0 0 0 3 0z"></svg:path><svg:path fill="url(#fluentColorDataBarVerticalAscending162)" d="M6 9.497a1.5 1.5 0 1 0-3 0v3a1.5 1.5 0 0 0 3 0z"></svg:path><svg:defs><svg:lineargradient id="fluentColorDataBarVerticalAscending160" x1="13.605" x2="21.663" y1="-1.686" y2="2.075" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#16BBDA"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataBarVerticalAscending161" x1="7.292" x2="14.437" y1="2.802" y2="7.168" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#16BBDA"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataBarVerticalAscending162" x1="2.813" x2="8.145" y1="4.622" y2="9.509" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#16BBDA"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDataBarVerticalAscending16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
