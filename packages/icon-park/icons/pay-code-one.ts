import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPayCodeOneIcon],svg[icon-park-pay-code-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="10" height="10" x="32" y="6" fill="#2F88FF"></svg:rect><svg:rect width="10" height="10" x="32" y="32" fill="#2F88FF"></svg:rect><svg:rect width="10" height="10" x="6" y="32" fill="#2F88FF"></svg:rect><svg:rect width="10" height="10" x="6" y="6" fill="#2F88FF"></svg:rect><svg:path d="M8 24L30 24"></svg:path><svg:path d="M38 24L40 24"></svg:path><svg:path d="M24 37V39"></svg:path><svg:path d="M24 17V31"></svg:path><svg:path d="M24 8V10"></svg:path></svg:g>`,
})
export class IconParkPayCodeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
