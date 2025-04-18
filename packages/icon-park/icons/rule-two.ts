import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRuleTwoIcon],svg[icon-park-rule-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 13C11 13 4 22.8497 4 35H44C44 22.8497 37 13 24 13Z"></svg:path><svg:path stroke-linecap="round" d="M10 31L10 35"></svg:path><svg:path stroke-linecap="round" d="M17 31L17 35"></svg:path><svg:path stroke-linecap="round" d="M24 31L24 35"></svg:path><svg:path stroke-linecap="round" d="M31 31L31 35"></svg:path><svg:path stroke-linecap="round" d="M38 31L38 35"></svg:path><svg:path d="M24 20C19.4457 20 14 22.134 14 26H34C34 22.134 28.5543 20 24 20Z"></svg:path></svg:g>`,
})
export class IconParkRuleTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
