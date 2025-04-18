import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWoolenHatIcon],svg[icon-park-woolen-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="40" height="10" x="4" y="34" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 26V34"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 26V34"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M33 26V34"></svg:path><svg:circle cx="24" cy="8" r="4" fill="#2F88FF"></svg:circle><svg:path d="M8 34C8 25.75 9 12 24 12C39 12 40 25.75 40 34"></svg:path></svg:g>`,
})
export class IconParkWoolenHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
