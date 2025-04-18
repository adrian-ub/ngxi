import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPhonographIcon],svg[icon-park-phonograph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="36" height="36" x="6" y="6" stroke="#000" stroke-width="4" rx="3"></svg:rect><svg:circle cx="24" cy="25" r="11" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:rect width="4" height="4" x="22" y="23" fill="#fff" rx="2"></svg:rect><svg:rect width="4" height="4" x="34" y="34" fill="#000" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 20L36 12"></svg:path></svg:g>`,
})
export class IconParkPhonographIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
