import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdCookieMinusFilledIcon],svg[line-md-cookie-minus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCookieMinusFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="7.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="17.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="14.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="12.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.6s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.9s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 19h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCookieMinusFilled0)"></svg:rect>`,
})
export class LineMdCookieMinusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
