import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdCookieSettingsTwotoneIcon],svg[line-md-cookie-settings-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 3c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="currentColor" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="6.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="16.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="10.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="13.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M8 23h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 23h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.7s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M16 23h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.8s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCookieSettingsTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
