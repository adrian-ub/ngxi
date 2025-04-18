import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDigitalWatchesIcon],svg[icon-park-digital-watches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="22" height="22" x="13" y="13" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M29 35V42C29 43.1046 28.1046 44 27 44H21C19.8954 44 19 43.1046 19 42V35"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M19 13V6C19 4.89543 19.8954 4 21 4H27C28.1046 4 29 4.89543 29 6V13"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M35 21H37"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19 24H21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M27 24H29"></svg:path></svg:g>`,
})
export class IconParkDigitalWatchesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
