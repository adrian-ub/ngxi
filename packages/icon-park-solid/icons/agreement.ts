import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAgreementIcon],svg[icon-park-solid-agreement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:rect width="32" height="40" x="8" y="4" stroke-linejoin="round" rx="2"></svg:rect><svg:path fill="currentColor" stroke-linejoin="round" d="M16 4h9v16l-4.5-4l-4.5 4z"></svg:path><svg:path d="M16 28h10m-10 6h16"></svg:path></svg:g>`,
})
export class IconParkSolidAgreementIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
