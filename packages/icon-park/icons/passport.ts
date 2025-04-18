import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPassportIcon],svg[icon-park-passport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 10H32H38V44H10V10Z"></svg:path><svg:path stroke="#000" d="M10 10L32 4V10"></svg:path><svg:circle cx="24" cy="24" r="4" fill="#2F88FF" stroke="#fff"></svg:circle><svg:path stroke="#fff" d="M20 34H28"></svg:path></svg:g>`,
})
export class IconParkPassportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
