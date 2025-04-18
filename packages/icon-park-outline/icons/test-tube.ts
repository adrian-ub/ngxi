import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTestTubeIcon],svg[icon-park-outline-test-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 4h12"></svg:path><svg:path d="M24 44a6 6 0 0 0 6-6V10H18v28a6 6 0 0 0 6 6" clip-rule="evenodd"></svg:path><svg:path d="M24 27v1m0-10v3m-5 14h11"></svg:path></svg:g>`,
})
export class IconParkOutlineTestTubeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
