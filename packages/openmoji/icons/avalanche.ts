import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiAvalancheIcon],svg[openmoji-avalanche-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="51.492" cy="23.819" r="3.305" fill="#fff"></svg:circle><svg:path fill="#fff" d="m9 41.874l8.894-21.365l5.13-1.483h1.01L29 20.839l10.807 23.753a5.48 5.48 0 0 1 4.695-2.353a5.286 5.286 0 0 1 5.46 4.985L51 50a10.3 10.3 0 0 1 4-1a6.957 6.957 0 0 1 7.209 7.082a7.226 7.226 0 0 1-7.4 7.486H9z"></svg:path><svg:path fill="#9b9b9a" d="m21.068 36.792l-3.361-1.697l-6.775 2.469l-2.187 4.625v21.379h9.838l15.183.01z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"><svg:path stroke-miterlimit="10" d="M49.962 47.224a5.286 5.286 0 0 0-5.46-4.985a5.18 5.18 0 0 0-5.5 4.985m9.813 7.729A5.976 5.976 0 0 1 55 49a6.957 6.957 0 0 1 7.209 7.082a7.226 7.226 0 0 1-7.4 7.486h-14.25"></svg:path><svg:path stroke-linejoin="round" d="m11.409 37.343l6.298-2.248l3.996 2.513l4.247-2.748"></svg:path><svg:path stroke-miterlimit="10" d="m37.562 55.873l-8.651-18.2m10.896 6.919L29 20.839l-4.966-1.813h-1.01l-5.13 1.483l-8.756 21.365m24.298 21.044l-9.501-20.212m29.792-30.377l-.215 8.171l6.952-4.229m-17.76 0l7.024 4.3l-.215-8.242m-8.601 15.61l7.167-3.941l-7.167-3.942m8.601 15.61l.215-8.242l-7.024 4.3m17.76 0l-6.952-4.228l.215 8.17m8.601-15.61l-7.168 3.942l7.168 3.941"></svg:path></svg:g>`,
})
export class OpenmojiAvalancheIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
