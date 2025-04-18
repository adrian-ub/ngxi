import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkExpandUpIcon],svg[icon-park-expand-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M6 16H42"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 32L24 28L28 32"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 10V22"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 10V22"></svg:path></svg:g>`,
})
export class IconParkExpandUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
