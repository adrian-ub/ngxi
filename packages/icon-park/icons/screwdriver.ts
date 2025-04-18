import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkScrewdriverIcon],svg[icon-park-screwdriver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M19 24H29V29C29.9613 29.9763 31.0387 31.5237 32 32.5V44H16V32.5L19 29V24Z"></svg:path><svg:path stroke-linecap="round" d="M21 13V24H27V13L29 10L27 4H21L19 10L21 13Z"></svg:path></svg:g>`,
})
export class IconParkScrewdriverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
