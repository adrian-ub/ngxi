import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDroneOneIcon],svg[icon-park-drone-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M29 18V16C29 13.2386 26.7614 11 24 11V11C21.2386 11 19 13.2386 19 16V18"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" d="M17 18H31L28.8462 25H19.1538L17 18Z"></svg:path><svg:rect width="7" height="7" x="5" y="22" fill="#2F88FF"></svg:rect><svg:rect width="7" height="7" x="36" y="22" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M16 8L4 8"></svg:path><svg:path stroke-linecap="round" d="M30 33L34 40"></svg:path><svg:path stroke-linecap="round" d="M18 33L14 40"></svg:path><svg:path stroke-linecap="round" d="M44 8L32 8"></svg:path></svg:g>`,
})
export class IconParkDroneOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
