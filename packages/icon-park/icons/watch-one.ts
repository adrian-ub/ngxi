import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWatchOneIcon],svg[icon-park-watch-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M19 14V6C19 4.89543 19.8954 4 21 4H27C28.1046 4 29 4.89543 29 6V14"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M29 34V42C29 43.1046 28.1046 44 27 44H21C19.8954 44 19 43.1046 19 42V34"></svg:path><svg:circle cx="24" cy="24" r="11" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M21 25L25 25"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M25 21V25"></svg:path></svg:g>`,
})
export class IconParkWatchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
