import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePaperMoneyTwoIcon],svg[icon-park-outline-paper-money-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 13h40v24H4z"></svg:path><svg:path stroke-linecap="round" d="M4 21a8 8 0 0 0 8-8H4zm0 8a8 8 0 0 1 8 8H4zm40 0v8h-8a8 8 0 0 1 8-8m0-8a8 8 0 0 1-8-8h8z" clip-rule="evenodd"></svg:path><svg:path d="M24 31c2.761 0 5-2.686 5-6s-2.239-6-5-6s-5 2.686-5 6s2.239 6 5 6Z"></svg:path></svg:g>`,
})
export class IconParkOutlinePaperMoneyTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
