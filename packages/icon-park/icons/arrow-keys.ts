import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkArrowKeysIcon],svg[icon-park-arrow-keys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M14 4H34V24H14V4Z"></svg:path><svg:path fill="#2F88FF" d="M4 24H24V44H4V24Z"></svg:path><svg:path fill="#2F88FF" d="M24 24H44V44H24V24Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 24H4V44H24V24ZM24 24V44V24ZM24 24H44V44H24V24ZM14 4H34V24H14V4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 10V18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 14L24 10L28 14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 34H18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 38L10 34L14 30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 34H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 30L38 34L34 38"></svg:path></svg:g>`,
})
export class IconParkArrowKeysIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
