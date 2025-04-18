import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDeleteIcon],svg[icon-park-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M9 10V44H39V10H9Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 20V33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 20V33"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 10H44"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M16 10L19.289 4H28.7771L32 10H16Z"></svg:path></svg:g>`,
})
export class IconParkDeleteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
