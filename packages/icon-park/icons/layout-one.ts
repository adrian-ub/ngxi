import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLayoutOneIcon],svg[icon-park-layout-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M6 16H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 13V19"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 14V20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 16V42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M29 42H35"></svg:path></svg:g>`,
})
export class IconParkLayoutOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
