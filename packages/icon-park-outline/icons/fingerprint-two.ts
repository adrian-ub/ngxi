import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFingerprintTwoIcon],svg[icon-park-outline-fingerprint-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 44V22a6 6 0 0 1 12 0v22"></svg:path><svg:path d="M13 44V22c0-6.627 5.373-12 12-12s12 5.373 12 12v22"></svg:path><svg:path d="M7 44V22c0-9.941 8.059-18 18-18s18 8.059 18 18v22m-18 0V22"></svg:path></svg:g>`,
})
export class IconParkOutlineFingerprintTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
