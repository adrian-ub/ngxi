import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDisplayIcon],svg[icon-park-display-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="20" x="6" y="6" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M14 13L22 13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14 19L34 19"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M8 44L12.8889 38H34.6667L40 44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 26L24 44"></svg:path></svg:g>`,
})
export class IconParkDisplayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
