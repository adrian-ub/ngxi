import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCutOfMeatIcon],svg[openmoji-cut-of-meat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M26 27h-7c-7.733 0-14 6.267-14 14s6.267 14 14 14h29c10.495 0 19-8.505 19-19s-8.505-19-19-19c-5.693 0-10.79 2.514-14.27 6.48C31.898 25.652 29.066 27 26 27"></svg:path><svg:path fill="#ea5a47" d="M29 31c2.5 0 4.503-1.414 6.816-3.727C39.27 23.821 42.975 21 48 21c8.284 0 15 6.716 15 15s-6.716 15-15 15H19c-5.523 0-10-4.477-10-10s4.477-10 10-10l.031-.976l10.032-.03z"></svg:path><svg:circle cx="48" cy="36" r="5" fill="#FFF"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M29 31c2.5 0 4.503-1.414 6.816-3.727C39.27 23.821 42.975 21 48 21c8.284 0 15 6.716 15 15s-6.716 15-15 15H19c-5.523 0-10-4.477-10-10s4.477-10 10-10"></svg:path><svg:path d="M26 27h-7c-7.733 0-14 6.267-14 14s6.267 14 14 14h29c10.495 0 19-8.505 19-19s-8.505-19-19-19c-5.693 0-10.79 2.514-14.27 6.48C31.898 25.652 29.066 27 26 27"></svg:path><svg:circle cx="48" cy="36" r="5"></svg:circle></svg:g>`,
})
export class OpenmojiCutOfMeatIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
