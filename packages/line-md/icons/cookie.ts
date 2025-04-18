import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdCookieIcon],svg[line-md-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="currentColor" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="7.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="17.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="14.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="12.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g></svg:g>`,
})
export class LineMdCookieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
