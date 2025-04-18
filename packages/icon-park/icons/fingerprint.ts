import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFingerprintIcon],svg[icon-park-fingerprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 43V22C18 18.6863 20.6863 16 24 16C27.3137 16 30 18.6863 30 22V43"></svg:path><svg:path d="M12 40V22C12 15.3726 17.3726 10 24 10C30.6274 10 36 15.3726 36 22V40"></svg:path><svg:path d="M6 35V22C6 12.0589 14.0589 4 24 4C33.9411 4 42 12.0589 42 22V35"></svg:path><svg:path d="M24 44V31"></svg:path><svg:path d="M24 24.625V21.875"></svg:path></svg:g>`,
})
export class IconParkFingerprintIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
