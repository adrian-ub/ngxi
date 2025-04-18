import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFingerprintIcon],svg[icon-park-outline-fingerprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 43V22a6 6 0 0 1 12 0v21"></svg:path><svg:path d="M12 40V22c0-6.627 5.373-12 12-12s12 5.373 12 12v18"></svg:path><svg:path d="M6 35V22c0-9.941 8.059-18 18-18s18 8.059 18 18v13m-18 9V31m0-6.375v-2.75"></svg:path></svg:g>`,
})
export class IconParkOutlineFingerprintIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
