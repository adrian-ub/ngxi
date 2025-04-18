import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBalanceTwoIcon],svg[icon-park-balance-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 22L10 12L4 22"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M10 28C13.3137 28 16 25.3137 16 22H4C4 25.3137 6.68629 28 10 28Z" clip-rule="evenodd"></svg:path><svg:path d="M44 22L38 12L32 22"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M38 28C41.3137 28 44 25.3137 44 22H32C32 25.3137 34.6863 28 38 28Z" clip-rule="evenodd"></svg:path><svg:path d="M24 6V42"></svg:path><svg:path d="M10 12H24H38"></svg:path><svg:path d="M10 12H24H38"></svg:path><svg:path d="M38 42H24H10"></svg:path></svg:g>`,
})
export class IconParkBalanceTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
