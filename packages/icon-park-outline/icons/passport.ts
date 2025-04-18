import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePassportIcon],svg[icon-park-outline-passport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 10h28v34H10zm0 0l22-6v6"></svg:path><svg:circle cx="24" cy="24" r="4"></svg:circle><svg:path d="M20 34h8"></svg:path></svg:g>`,
})
export class IconParkOutlinePassportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
