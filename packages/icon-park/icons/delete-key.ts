import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDeleteKeyIcon],svg[icon-park-delete-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M18.4237 10.5379C18.794 10.1922 19.2817 10 19.7883 10H42C43.1046 10 44 10.8954 44 12V36C44 37.1046 43.1046 38 42 38H19.7883C19.2817 38 18.794 37.8078 18.4237 37.4621L4 24L18.4237 10.5379Z"></svg:path><svg:path stroke="#fff" d="M36 19L26 29"></svg:path><svg:path stroke="#fff" d="M26 19L36 29"></svg:path></svg:g>`,
})
export class IconParkDeleteKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
