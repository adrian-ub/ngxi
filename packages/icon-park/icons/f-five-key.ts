import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFFiveKeyIcon],svg[icon-park-f-five-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M34 16H26V22.9185C26 22.9185 27.8333 21.5 30.5 21.5C33.1667 21.5 34 23.6585 34 27C34 30.3415 32.5 32 29.5556 32C26.8889 32 26 30.315 26 28.6365"></svg:path><svg:path stroke="#fff" d="M21 16H14V32"></svg:path><svg:path stroke="#fff" d="M14 24H21"></svg:path></svg:g>`,
})
export class IconParkFFiveKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
