import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUserIcon],svg[icon-park-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="12" r="8" fill="#2F88FF"></svg:circle><svg:path d="M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44"></svg:path></svg:g>`,
})
export class IconParkUserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
