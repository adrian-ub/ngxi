import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWebSyndicationIcon],svg[openmoji-web-syndication-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F1B31C" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965"></svg:path><svg:circle cx="24.5" cy="47.5" r="4.5" fill="#fff"></svg:circle><svg:path fill="#fff" fill-rule="evenodd" d="M42 52c0-12.15-9.85-22-22-22v7c8.284 0 15 6.716 15 15z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M52 52c0-17.673-14.327-32-32-32v7c13.807 0 25 11.193 25 25z" clip-rule="evenodd"></svg:path><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:path stroke-miterlimit="10" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965Z"></svg:path><svg:path stroke-linecap="round" d="M29 47.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0"></svg:path><svg:path d="M41 52c0-11.598-9.402-21-21-21v6c8.284 0 15 6.716 15 15z" clip-rule="evenodd"></svg:path><svg:path d="M52 52c0-17.673-14.327-32-32-32v6.001c14.106.134 25.5 11.611 25.5 25.749l-.001.25z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class OpenmojiWebSyndicationIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
