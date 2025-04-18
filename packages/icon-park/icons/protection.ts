import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkProtectionIcon],svg[icon-park-protection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M42 24C42 14.6112 33.9411 7 24 7C14.0589 7 6 14.6112 6 24H42Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 24.0083V38.5454C24 41.5579 21.5142 44 18.5 44C15.4858 44 13 41.5579 13 38.5454"></svg:path><svg:path stroke-linecap="round" d="M24 4V7"></svg:path></svg:g>`,
})
export class IconParkProtectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
