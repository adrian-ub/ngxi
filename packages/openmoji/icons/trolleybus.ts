import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiTrolleybusIcon],svg[openmoji-trolleybus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3f3f3f" d="M31 21h14v3H31z"></svg:path><svg:path fill="#d0cfce" d="M18 48h-.085A2.923 2.923 0 0 1 15 45.085v-18.17A2.923 2.923 0 0 1 17.915 24h40.17A2.923 2.923 0 0 1 61 26.915v18.17A2.923 2.923 0 0 1 58.085 48H58"></svg:path><svg:path fill="#61b2e4" d="M15 38h45v9H15z"></svg:path><svg:path fill="#92d3f5" d="M17 27h8v9h-8zm13 0h7v7h-7zm10 0h7v7h-7zm10 0h7v7h-7z"></svg:path><svg:path fill="#fff" d="M16 38h5v3h-5z"></svg:path><svg:circle cx="54" cy="48" r="4" fill="#d0cfce"></svg:circle><svg:circle cx="22" cy="48" r="4" fill="#d0cfce"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M50 48H26.121m4.788-24v-3H46v3m-7.545-3L47 11"></svg:path><svg:circle cx="22" cy="48" r="4"></svg:circle><svg:circle cx="54" cy="48" r="4"></svg:circle><svg:path d="M18 36h7v-8.1m5.875 6.1H37v-6.125M40.875 34H47v-6.125M50.875 34H57v-6.125"></svg:path><svg:path d="M18 48h-.085A2.923 2.923 0 0 1 15 45.085v-18.17A2.923 2.923 0 0 1 17.915 24h40.17A2.923 2.923 0 0 1 61 26.915v18.17A2.923 2.923 0 0 1 58.085 48H58"></svg:path><svg:path d="M17 41h4v-2"></svg:path></svg:g>`,
})
export class OpenmojiTrolleybusIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
