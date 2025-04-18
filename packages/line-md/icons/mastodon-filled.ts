import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdMastodonFilledIcon],svg[line-md-mastodon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdMastodonFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="88" stroke-dashoffset="88" d="M15.5 21.5c-10.5 2.5 -12.5 -2.5 -12.5 -8.5v-3c0 -6 2.5 -7 7 -7h4c4.5 0 7 1.5 7 5.5v4c0 6.5 -10 4 -13.5 4c-1 0 -1.5 7 8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="88;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="32" stroke-dashoffset="32" d="M7 13.5l0 -5.5c0 0 0.5 -2 2.5 -2c2 0 2.5 2 2.5 2l0 2.5l0 -2.5c0 0 0.5 -2 2.5 -2c2 0 2.5 2 2.5 2l0 5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.7s" values="32;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdMastodonFilled0)"></svg:rect>`,
})
export class LineMdMastodonFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
