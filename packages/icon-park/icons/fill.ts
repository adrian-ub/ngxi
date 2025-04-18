import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFillIcon],svg[icon-park-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:rect width="20" height="20" x="14" y="14" fill="#43CCF8" stroke="#fff"></svg:rect><svg:path stroke="#fff" d="M34 23L23 34"></svg:path><svg:path stroke="#fff" d="M25 14L14 25"></svg:path><svg:path stroke="#fff" d="M34 14L14 34"></svg:path><svg:path stroke="#fff" d="M14 22V34H26"></svg:path><svg:path stroke="#fff" d="M22 14H34V26"></svg:path></svg:g>`,
})
export class IconParkFillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
