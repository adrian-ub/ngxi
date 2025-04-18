import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAgreementIcon],svg[icon-park-agreement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="32" height="40" x="8" y="4" stroke-linejoin="round" rx="2"></svg:rect><svg:path fill="#2F88FF" stroke-linejoin="round" d="M16 4H25V20L20.5 16L16 20V4Z"></svg:path><svg:path d="M16 28H26"></svg:path><svg:path d="M16 34H32"></svg:path></svg:g>`,
})
export class IconParkAgreementIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
